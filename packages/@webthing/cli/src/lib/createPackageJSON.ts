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
import { WEBTHING_ROOT } from "./paths";

const PACKAGE_BABEL_RC = {
  plugins: [
    [
      require("babel-plugin-module-resolver"),
      {
        root: ["./"],
        alias: {
          "@webthing/core": WEBTHING_ROOT,
          codeblog: WEBTHING_ROOT
        }
      }
    ],
    require("@babel/plugin-proposal-class-properties")
  ],
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
    require: __non_webpack_require__,
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
    publishConfig: { registry: "http://registry.webthi.ng/" },
    main: `dist/${packageName}.js`,
    browser: `dist/${packageName}.js`,
    esm: `dist/${packageName}.esm.js`
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
    require: __non_webpack_require__,
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
    webthing: merge({
      existingPackageJSON,
      result
    }),
    publishConfig: { registry: "http://registry.webthi.ng/" },
    main: `dist/template.js`,
    browser: `dist/template.js`,
    esm: `dist/template.esm.js`
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
