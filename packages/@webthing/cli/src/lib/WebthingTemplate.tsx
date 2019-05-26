import fs from "fs";
import { isNumber, min } from "lodash";
import { action, computed, decorate, observable } from "mobx";
import path from "path";
import * as rollup from "rollup";
import { inspect } from "util";
import {
  compilePackageJSFile,
  convertTemplatePackageJSToJSON,
  saveTemplatePackageJS,
  saveTemplatePackageJSON
} from "./createPackagejSON";
import {
  clearOutputPath,
  templateJSFilename,
  templateJSFilePath,
  templateOutputPath,
  templatePackageJSFilePath
} from "./packageUtils";
import { runYarnInstall } from "./publishPackage";
import { buildConfig, buildTemplateConfig } from "./rollup";

export enum BuildStatus {
  compiling = 0,
  saving = 1,
  converting = 2,
  failed = -1,
  success = 3
}

export enum LogLevel {
  info,
  error,
  success,
  debug
}
export type LogFunction = (
  text: string,
  level: LogLevel | null,
  packageName: string
) => void;

export class WebthingTemplate {
  constructor({
    packageName,
    packagePath,
    mode,
    log = null,
    onUpdate = null
  }: {
    packageName: string;
    packagePath: string;
    mode: "release" | "dev";
    log: LogFunction | null;
    onUpdate: (id: string) => void | null;
  }) {
    this.packageName = packageName;
    this.packagePath = packagePath;
    this.mode = mode;
    this.registration = observable.map(new Map());
    this.setManifest(BuildStatus.compiling);
    this.setTemplate(BuildStatus.compiling);

    if (log) {
      this._log = log;
    }

    if (onUpdate) {
      this.onUpdate = onUpdate;
    }
  }

  onUpdate = (...update) => {};

  emitUpdates: boolean = false;
  onUpdate: (id: string) => void;
  packageName: string;
  packagePath: string;
  mode: "dev" | "release";
  _log: LogFunction;
  log = (text: string, level: LogLevel) => {
    if (this._log) {
      return this._log(text, level, this.packageName);
    }
  };

  registration: Map<string, any>;
  id: string | null = null;
  srcPath: string | null = null;

  manifestWatcher: fs.FSWatcher | null;
  packageJSONWatcher: fs.FSWatcher | null;
  rollupWatcher: any;
  packageJSON: {
    dependencies?: {};
    name: string;
  } | null;

  manifest: {
    lastUpdated: Date;
  } = {
    lastUpdated: new Date()
  };
  manifestStatus: BuildStatus;
  templateStatus: BuildStatus;

  template: {
    lastUpdated: Date;
    status: BuildStatus;
  } = {
    lastUpdated: new Date(),
    status: BuildStatus.compiling
  };

  get manifestPath() {
    return templatePackageJSFilePath(this.packageName, this.packagePath);
  }

  get codePath() {
    return templateJSFilePath(this.packageName, this.packagePath);
  }

  get yarnPath() {
    return path.resolve(this.buildPath, "../");
  }

  get packageJSONPath() {
    return path.resolve(this.yarnPath, "package.json");
  }

  get buildPath() {
    return templateOutputPath(this.packageName, this.packagePath, this.mode);
  }

  startWatchingManifest = () => {
    if (this.manifestWatcher) {
      this.manifestWatcher.close();
      this.manifestWatcher = null;
    }

    this.manifestWatcher = fs.watch(
      this.manifestPath,
      {
        encoding: "utf8",
        persistent: true
      },
      this.handleManifestChange
    );
  };

  startWatchingPackageJSON = () => {
    if (this.packageJSONWatcher) {
      this.packageJSONWatcher.close();
      this.packageJSONWatcher = null;
    }

    this.packageJSONWatcher = fs.watch(
      this.packageJSONPath,
      {
        encoding: "utf8",
        persistent: true
      },
      this.handleManifestChange
    );
  };

  handleManifestChange = async () => {
    return await this.buildPackageJS();
  };

  setSrcPath = srcPath => {
    this.srcPath = srcPath;

    if (this.emitUpdates) {
      this.onUpdate(this.id);
    }
  };

  handleTemplateCodeChange = (event, ...other) => {
    let status;
    if (event.code === "BUNDLE_END") {
      this.setSrcPath(`/template.js`);
      this.log(`Built ${this.packageName}`, LogLevel.success);
      status = BuildStatus.success;
    } else if (event.code === "BUNDLE_START") {
      this.log(`Building ${this.packageName}`, LogLevel.info);
      status = BuildStatus.compiling;
    } else if (event.code === "ERROR") {
      this.log(
        `Build error in ${templateJSFilePath(
          this.packageName,
          this.packagePath
        )}`,
        LogLevel.error
      );

      this.log(event.error.message, LogLevel.error);
      status = BuildStatus.failed;
    } else if (event.code === "END") {
      status = BuildStatus.success;
    } else if (event.code === "FATAL") {
      this.log(event.error.message, LogLevel.error);
      this.log(event.error, LogLevel.error);
    }

    if (status) {
      this.setTemplate(status);
    }
  };

  get dependencies() {
    if (this.packageJSON && typeof this.packageJSON.dependencies === "object") {
      return this.packageJSON.dependencies;
    } else {
      return {};
    }
  }

  start = async () => {
    await clearOutputPath(this.buildPath);
    await this.buildPackageJS();
    await this.startWatchingTemplateCode();
    await this.startWatchingManifest();
    await this.startWatchingPackageJSON();
    this.emitUpdates = true;
  };

  get buildStatus() {
    return (
      min([this.manifestStatus, this.templateStatus].filter(isNumber)) ||
      BuildStatus.compiling
    );
  }

  setManifest = status => {
    this.manifest.lastUpdated = new Date();
    this.manifestStatus = status;

    if (this.emitUpdates) {
      this.onUpdate(this.id);
    }
  };

  setTemplate = status => {
    this.template.lastUpdated = new Date();
    this.templateStatus = status;

    if (this.emitUpdates) {
      this.onUpdate(this.id);
    }
  };

  handleWarn = (warning, warn) => {
    if (warning.code === "UNUSED_EXTERNAL_IMPORT") {
      this.log(warning.message, LogLevel.debug);
      return;
    }

    this.log(warning.message, LogLevel.debug);
  };

  startWatchingTemplateCode = async () => {
    this.log("Building rollup config", LogLevel.debug);
    const templateConfig = buildTemplateConfig(
      this.packageName,
      this.packagePath,
      this.mode,
      this.id
    );

    this.rollupWatcher = rollup.watch([
      {
        ...templateConfig,
        onwarn: this.handleWarn
      }
    ]);

    this.rollupWatcher.on("event", this.handleTemplateCodeChange);
    this.log("Started rollup", LogLevel.debug);
  };

  buildPackageJS = async () => {
    let packageJSCode, packageJSON, _packageJSON;
    this.setManifest(BuildStatus.compiling);

    try {
      this.log(
        `Compiling ${templateJSFilename(this.packageName)}`,
        LogLevel.debug
      );
      packageJSCode = await compilePackageJSFile(
        templatePackageJSFilePath(this.packageName, this.packagePath)
      );
    } catch (exception) {
      this.log(exception.message, LogLevel.error);
      this.setManifest(BuildStatus.failed);
      return;
    }

    this.log(
      `Saving compiled ${templateJSFilename(this.packageName)}`,
      LogLevel.debug
    );

    await saveTemplatePackageJS(
      this.packageName,
      this.packagePath,
      this.mode,
      packageJSCode
    );

    try {
      this.log(
        `Converting template.package.js to package.json`,
        LogLevel.debug
      );
      packageJSON = await convertTemplatePackageJSToJSON(
        packageJSCode,
        this.packageName,
        templatePackageJSFilePath(this.packageName, this.packagePath)
      );
      _packageJSON = JSON.parse(packageJSON);
    } catch (exception) {
      this.log(exception.message, LogLevel.error);
      this.setManifest(BuildStatus.failed);
      return;
    }

    if (!_packageJSON) {
      this.log("Invalid package.json:", LogLevel.error);
      this.log(inspect(_packageJSON), LogLevel.error);
      this.log(
        `Please check that ${
          this.manifestPath
        } export default's a valid object`,
        LogLevel.error
      );

      this.setManifest(BuildStatus.failed);
      return;
    } else if (!_packageJSON.name) {
      this.log(
        `${this.manifestPath} is missing "name" in the default export.`,
        LogLevel.error
      );
      this.log(
        `Please make sure it exports a valid package.json object`,
        LogLevel.error
      );

      this.setManifest(BuildStatus.failed);
      return;
    } else if (!_packageJSON.webthing) {
      this.log(
        `${this.manifestPath} is missing "webthing" in the default export.`,
        LogLevel.error
      );
      this.log(
        `This is required so Webthing knows how to render your template`,
        LogLevel.error
      );

      this.setManifest(BuildStatus.failed);
      return;
    }

    this.id = _packageJSON.name;
    this.setRegistration(_packageJSON.webthing);

    this.log(`Saving package.json`, LogLevel.debug);
    await saveTemplatePackageJSON(
      this.packageName,
      this.packagePath,
      this.mode,
      packageJSON
    );

    this.log(`Running yarn install`, LogLevel.debug);
    await runYarnInstall(this.yarnPath);

    this.log("Updated package.json", LogLevel.success);

    this.setManifest(BuildStatus.success);

    this.packageJSON = _packageJSON;
  };

  setRegistration(registration) {
    this.registration.clear();

    Object.keys(registration).forEach(key => {
      this.registration.set(key, registration[key]);
    });
  }
}

decorate(WebthingTemplate, {
  srcPath: observable,
  packageJSON: observable.shallow,
  buildStatus: computed,
  manifestStatus: observable,
  templateStatus: observable,
  manifestPath: computed,
  codePath: computed,
  setTemplate: action,
  setManifest: action,
  setSrcPath: action,
  handleTemplateCodeChange: action,
  setRegistration: action,
  handleManifestChange: action
});

export class WebthingTemplateStore {
  static async load(
    folderPath: string,
    mode: "dev" | "release",
    log: LogFunction,
    sendTemplateUpdate: Function
  ): Promise<WebthingTemplate> {
    const template = new WebthingTemplate({
      packageName: path.basename(folderPath),
      packagePath: folderPath,
      mode,
      log,
      onUpdate: sendTemplateUpdate
    });

    await template.start();

    return template;
  }
}
