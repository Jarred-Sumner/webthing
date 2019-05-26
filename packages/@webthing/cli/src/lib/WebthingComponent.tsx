import { decorate, observable, computed, action } from "mobx";
import {
  compilePackageJSFile,
  savePackageJS,
  convertPackageJSToJSON,
  savePackageJSON
} from "./createPackagejSON";
import {
  packageJSFilePath,
  outputPath,
  packageJSFilename,
  jsFilePath,
  clearOutputPath
} from "./packageUtils";
import fs from "fs";
import { runYarnInstall } from "./publishPackage";
import { buildConfig } from "./rollup";
import { basename } from "path";
import * as rollup from "rollup";
import { min, isNumber } from "lodash";
import { inspect } from "util";
import fg from "fast-glob";

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

const findComponentPathsInFolder = (folderPath: string) => {
  return fg([`*.package.js`], {
    cwd: folderPath,
    onlyFiles: true,
    unique: true,
    absolute: true
  });
};

export class WebthingComponent {
  constructor({
    packageName,
    packagePath,
    mode,
    log,
    onUpdate
  }: {
    packageName: string;
    packagePath: string;
    mode: "release" | "dev";
    log: LogFunction;
    onUpdate: (id: string) => void;
  }) {
    this.packageName = packageName;
    this.packagePath = packagePath;
    this.mode = mode;
    this.registration = observable.map(new Map());
    this._log = log;
    this.setManifest(BuildStatus.compiling);
    this.setComponent(BuildStatus.compiling);
    this.onUpdate = onUpdate;
  }

  emitUpdates: boolean = false;
  onUpdate: (id: string) => void;
  packageName: string;
  packagePath: string;
  mode: "dev" | "release";
  _log: LogFunction;
  log = (text: string, level: LogLevel) => {
    return this._log(text, level, this.packageName);
  };

  registration: Map<string, any>;
  id: string | null = null;
  srcPath: string | null = null;

  manifestWatcher: fs.FSWatcher | null;
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
  componentStatus: BuildStatus;

  component: {
    lastUpdated: Date;
    status: BuildStatus;
  } = {
    lastUpdated: new Date(),
    status: BuildStatus.compiling
  };

  get manifestPath() {
    return packageJSFilePath(this.packageName, this.packagePath);
  }

  get codePath() {
    return jsFilePath(this.packageName, this.packagePath);
  }

  get buildPath() {
    return outputPath(this.packageName, this.packagePath, this.mode);
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

  handleManifestChange = async () => {
    return await this.buildPackageJS();
  };

  setSrcPath = srcPath => {
    this.srcPath = srcPath;

    if (this.emitUpdates) {
      this.onUpdate(this.id);
    }
  };

  handleComponentCodeChange = (event, ...other) => {
    let status;
    if (event.code === "BUNDLE_END") {
      this.setSrcPath(
        `/components/${this.packageName}/${basename(event.output[0])}.js`
      );
      this.log(`Built ${this.packageName}`, LogLevel.success);
      status = BuildStatus.success;
    } else if (event.code === "BUNDLE_START") {
      this.log(`Building ${this.packageName}`, LogLevel.info);
      status = BuildStatus.compiling;
    } else if (event.code === "ERROR") {
      this.log(
        `Build error in ${jsFilePath(this.packageName, this.packagePath)}`,
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
      this.setComponent(status);
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
    await this.startWatchingComponentCode();
    await this.startWatchingManifest();
    this.emitUpdates = true;
  };

  get buildStatus() {
    return (
      min([this.manifestStatus, this.componentStatus].filter(isNumber)) ||
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

  setComponent = status => {
    this.component.lastUpdated = new Date();
    this.componentStatus = status;

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

  startWatchingComponentCode = async () => {
    this.log("Building rollup config", LogLevel.debug);
    const componentConfig = buildConfig(
      this.packageName,
      this.packagePath,
      this.mode,
      this.id,
      Object.keys(this.dependencies)
    );

    this.rollupWatcher = rollup.watch([
      {
        ...componentConfig,
        onwarn: this.handleWarn
      }
    ]);

    this.rollupWatcher.on("event", this.handleComponentCodeChange);
    this.log("Started rollup", LogLevel.debug);
  };

  buildPackageJS = async () => {
    let packageJSCode, packageJSON, _packageJSON;
    this.setManifest(BuildStatus.compiling);

    try {
      this.log(
        `Compiling ${packageJSFilename(this.packageName)}`,
        LogLevel.debug
      );
      packageJSCode = await compilePackageJSFile(
        packageJSFilePath(this.packageName, this.packagePath)
      );
    } catch (exception) {
      this.log(exception.message, LogLevel.error);
      this.setManifest(BuildStatus.failed);
      return;
    }

    this.log(
      `Saving compiled ${packageJSFilename(this.packageName)}`,
      LogLevel.debug
    );

    await savePackageJS(
      this.packageName,
      this.packagePath,
      this.mode,
      packageJSCode
    );

    try {
      this.log(
        `Converting ${packageJSFilename(this.packageName)} to package.json`,
        LogLevel.debug
      );
      packageJSON = await convertPackageJSToJSON(
        packageJSCode,
        this.packageName,
        packageJSFilePath(this.packageName, this.packagePath)
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
        `This is required so Webthing knows how to render your component`,
        LogLevel.error
      );

      this.setManifest(BuildStatus.failed);
      return;
    }

    this.id = _packageJSON.name;
    this.setRegistration(_packageJSON.webthing);

    this.log(`Saving package.json`, LogLevel.debug);
    await savePackageJSON(
      this.packageName,
      this.packagePath,
      this.mode,
      packageJSON
    );

    this.log(`Running yarn install`, LogLevel.debug);
    await runYarnInstall(this.buildPath);

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

decorate(WebthingComponent, {
  srcPath: observable,
  packageJSON: observable.shallow,
  buildStatus: computed,
  manifestStatus: observable,
  componentStatus: observable,
  manifestPath: computed,
  codePath: computed,
  setComponent: action,
  setManifest: action,
  setSrcPath: action,
  handleComponentCodeChange: action,
  setRegistration: action,
  handleManifestChange: action
});

export class WebthingComponentStore {
  static async load(
    packageName: string,
    folderPath: string,
    mode: "dev" | "release",
    log: LogFunction,
    sendComponentUpdate: Function
  ): Promise<WebthingComponent> {
    const component = new WebthingComponent({
      packageName,
      packagePath: folderPath,
      mode,
      log,
      onUpdate: sendComponentUpdate
    });

    await component.start();

    return component;
  }

  static async loadAll(
    folderPath: string,
    mode: "dev" | "release",
    log: LogFunction,
    sendComponentUpdate: Function
  ): Promise<Array<WebthingComponent>> {
    const results = await findComponentPathsInFolder(folderPath);

    return Promise.all(
      results.map(packageJSPath => {
        const packageName = basename(packageJSPath.toString(), ".package.js");
        return this.load(
          packageName,
          folderPath,
          mode,
          log,
          sendComponentUpdate
        );
      })
    );
  }
}
