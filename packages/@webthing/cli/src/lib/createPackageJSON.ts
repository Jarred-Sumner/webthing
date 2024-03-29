import { transformFileAsync } from "@babel/core";
import fs from "fs";
import { merge } from "lodash";
import path, { basename } from "path";
import vm from "vm";
import {
  outputPath,
  templateOutputPath,
  templatePackageJSONPath
} from "./packageUtils";

const PACKAGE_BABEL_RC = {
  plugins: [require("@babel/plugin-proposal-class-properties")],
  presets: [
    [
      require("@babel/preset-env"),
      {
        targets: {
          browsers: "last 2 versions"
        },
        modules: "commonjs"
      }
    ],
    require("@babel/preset-react")
  ]
};

const fakeRequire = (id: string) => {
  if (id === "@webthing/registry") {
    return require("@webthing/registry");
  } else if (id === "@webthing/core") {
    return require("@webthing/core");
  } else {
    return null;
  }
};

export const compilePackageJSFile = async (filepath: string) => {
  const { code } = await transformFileAsync(filepath, {
    presets: PACKAGE_BABEL_RC.presets,
    plugins: PACKAGE_BABEL_RC.plugins
  });

  return code;
};

export const convertPackageJSToJSON = (
  code: string,
  packageName: string,
  filepath: string
) => {
  const script = new vm.Script(code);
  const sandbox = {
    require: fakeRequire,
    module: {}
  };
  let result;

  try {
    result = script.runInNewContext(sandbox, {
      displayErrors: true,
      filename: basename(filepath)
    });
  } catch (exception) {
    console.error(exception);
    console.log("---");
    console.log("This error is in", filepath);
  }

  const packageJS = {
    ...result,
    publishConfig: { registry: "http://registry.webthing.co/" },
    main: `dist/${packageName}.js`,
    browser: `dist/${packageName}.js`,
    esm: `dist/${packageName}.esm.js`,
    dependencies: {
      ...(result.dependencies || {}),
      "@webthing/core": require("@webthing/core/package.json").version,
      "@webthing/registry": require("@webthing/registry/package.json").version
    }
  };

  return JSON.stringify(packageJS);
};

export const convertTemplatePackageJSToJSON = (
  code: string,
  filepath: string
) => {
  const existingPackageJSON = JSON.parse(
    fs.readFileSync(templatePackageJSONPath(filepath), "utf8")
  );

  const script = new vm.Script(code);
  const sandbox = {
    require: fakeRequire,
    module: {}
  };
  let result;

  try {
    result = script.runInNewContext(sandbox, {
      displayErrors: true,
      filename: basename(filepath)
    });
  } catch (exception) {
    console.error(exception);
    console.log("---");
    console.log("This error is in", filepath);
  }

  const packageJS = merge({}, existingPackageJSON, {
    webthing: merge({}, existingPackageJSON, result),
    publishConfig: { registry: "http://registry.webthing.co/" },
    main: `dist/template.js`,
    browser: `dist/template.js`,
    esm: `dist/template.esm.js`,
    dependencies: {
      ...(existingPackageJSON.dependencies || {}),
      "@webthing/core": require("@webthing/core/package.json").version,
      "@webthing/registry": require("@webthing/registry/package.json").version
    },
    devDependencies: {
      ...(existingPackageJSON.devDependencies || {}),
      "@webthing/cli": require("../../package.json").version
    }
  });

  return JSON.stringify(packageJS);
};

export const savePackageJS = (
  packageName: string,
  packagePath: string,
  release: "dev" | "release",
  result: string
) => {
  const _outputPath = outputPath(packageName, packagePath, release);

  if (!fs.existsSync(_outputPath)) {
    fs.mkdirSync(_outputPath, {
      recursive: true
    });
  }

  fs.writeFileSync(path.join(_outputPath, `${packageName}.package.js`), result);
};

export const saveTemplatePackageJS = (
  packageName: string,
  packagePath: string,
  release: "dev" | "release",
  result: string
) => {
  const _outputPath = templateOutputPath(packageName, packagePath, release);

  if (!fs.existsSync(_outputPath)) {
    fs.mkdirSync(_outputPath, {
      recursive: true
    });
  }

  fs.writeFileSync(path.join(_outputPath, "template.package.js"), result);
};

export const savePackageJSON = (
  packageName: string,
  packagePath: string,
  release: "dev" | "release",
  result: string
) => {
  const _outputPath = outputPath(packageName, packagePath, release);

  if (!fs.existsSync(_outputPath)) {
    fs.mkdirSync(_outputPath, {
      recursive: true
    });
  }

  fs.writeFileSync(path.join(_outputPath, `package.json`), result);
};

export const saveTemplatePackageJSON = (
  packageName: string,
  packagePath: string,
  release: "dev" | "release",
  result: string
) => {
  const _outputPath = templateOutputPath(packageName, packagePath, release);

  if (!fs.existsSync(_outputPath)) {
    fs.mkdirSync(_outputPath, {
      recursive: true
    });
  }

  fs.writeFileSync(path.join(_outputPath, `package.json`), result);
};
