import fs from "fs";
import { merge } from "lodash";
import path from "path";
import babelPlugin from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import nodeResolve from "rollup-plugin-node-resolve";
import {
  jsFileName,
  jsFilePath,
  outputPath,
  packageJSFilename,
  packageJSFilePath,
  templateJSFilePath,
  templatePackageJSFilePath,
  templateOutputPath,
  templatePackageFilename,
  templateJSFilename
} from "./packageUtils";
import { CLI_ROOT, WEBTHING_ENTRY_NORMALIZER } from "./paths";
import alias from "rollup-plugin-strict-alias";
import json from "rollup-plugin-json";

export const NODE_MODULES = path.join(CLI_ROOT, "node_modules");

const BUNDLED_MODULES = [
  "@emotion/core",
  "@emotion/styled",
  "@emotion/styled-base",
  "classnames",
  "emotion-theming",
  "lodash",
  "moment",
  "react",
  "tinycolor2",
  "@webthing/core",
  "@webthing/registry",
  "codeblog"
];

const GLOBAL_MODULES = {
  "@emotion/core": "@emotion/core",
  "@emotion/styled": "@emotion/styled",
  "@emotion/styled-base": "@emotion/styled-base",
  classnames: "classnames",
  "emotion-theming": "emotion-theming",
  lodash: "lodash",
  moment: "moment",
  react: "react",
  tinycolor2: "tinycolor2",
  codeblog: "@webthing/core",
  webthing: "@webthing/core",
  ["@webthing/core"]: "@webthing/core",
  ["@webthing/registry"]: "@webthing/registry"
};

const BABEL_RC = {
  plugins: [
    require("babel-plugin-transform-css-import-to-string"),
    require("babel-plugin-transform-node-env-inline"),
    require("@babel/plugin-proposal-class-properties"),
    require("@babel/plugin-syntax-dynamic-import")
  ],
  presets: [
    [
      require("@babel/preset-env"),
      {
        targets: {
          browsers: "last 2 versions"
        }
      }
    ],
    require("@babel/preset-react"),
    require("@emotion/babel-preset-css-prop")
  ]
};

const devConfig = {};

// const buildPackageJSONPlugin = (outputPath: string) => {
//   return {
//     generateBundle({ isEntry = false }: { isEntry: boolean; code: string }) {
//       if (!isEntry) {
//         return;
//       }
//     }
//   };
// };

const validatePackage = (packageName: string, packagePath: string) => {
  const _packageJSPath = packageJSFilePath(packageName, packagePath);
  const _jsFilePath = jsFilePath(packageName, packagePath);

  if (!fs.existsSync(_packageJSPath)) {
    throw new Error(
      `Missing ${packageJSFilename(packageName)} in ${packagePath}.`
    );
  }

  if (!fs.existsSync(_jsFilePath)) {
    throw new Error(`Missing ${jsFileName(packageName)} in ${packagePath}.`);
  }

  return true;
};

const validateTemplate = (templateName: string, templatePath: string) => {
  const _packageJSPath = templatePackageJSFilePath(templateName, templatePath);
  const _templateFilePath = templateJSFilePath(templateName, templatePath);

  if (!fs.existsSync(_packageJSPath)) {
    throw new Error(`Missing ${templatePackageFilename()} in ${templatePath}.`);
  }

  if (!fs.existsSync(_templateFilePath)) {
    throw new Error(`Missing ${templateJSFilename()} in ${templatePath}.`);
  }

  return true;
};

export function buildConfig(
  packageName: string,
  packagePath: string,
  mode: "dev" | "release",
  packageID: string,
  dependencies: Array<string> = []
) {
  validatePackage(packageName, packagePath);
  const _jsFilePath = jsFilePath(packageName, packagePath);
  const _outputPath = outputPath(packageName, packagePath, mode);

  let modeConfig;
  if (mode === "dev") {
    modeConfig = devConfig;
  } else {
  }

  if (!fs.existsSync(_outputPath)) {
    fs.mkdirSync(_outputPath, {
      recursive: true
    });
  }

  try {
    fs.lstatSync(
      path.join(outputPath(packageName, packagePath, mode), "../node_modules")
    );
  } catch (exc) {
    fs.symlinkSync(
      NODE_MODULES,
      path.join(outputPath(packageName, packagePath, mode), "../node_modules")
    );
  }

  const moduleDirectory = [
    NODE_MODULES,
    path.join(_outputPath, "node_modules")
  ];

  let exportType;
  try {
    let file = fs.readFileSync(_jsFilePath, "utf-8");
    let hasDefault = /\bexport\s*default\s*[a-zA-Z_$]/.test(file);
    let hasNamed =
      /\bexport\s*(let|const|var|async|function\*?)\s*[a-zA-Z_$*]/.test(file) ||
      /^\s*export\s*\{/m.test(file);
    if (hasDefault && hasNamed) exportType = "default";
  } catch (e) {}

  const pluginsConfig = [
    alias({
      __webthing_entry__: _jsFilePath,
      codeblog: "@webthing/core"
    }),
    nodeResolve({
      mainFields: ["module", "jsnext", "main"],
      customResolveOptions: {
        moduleDirectory
      }
    }),
    commonjs({
      include: /node_modules/
    }),
    json(),
    babelPlugin(BABEL_RC)
  ];

  return merge(
    {},
    {
      input: exportType ? WEBTHING_ENTRY_NORMALIZER : _jsFilePath,
      plugins: pluginsConfig,
      inlineDynamicImports: true,
      external: BUNDLED_MODULES,
      output: [
        {
          name: packageID,
          format: "umd",
          entryFileNames: "[name].js",
          assetFileNames: "[name].js",
          chunkFileNames: "[name].js",
          dir: _outputPath,
          globals: GLOBAL_MODULES,
          legacy: true,
          exports: exportType ? "default" : undefined,
          freeze: false
        },
        {
          format: "esm",
          name: packageID,
          entryFileNames: "[name].esm.js",
          assetFileNames: "[name].js",
          chunkFileNames: "[name].esm.js",
          dir: _outputPath,
          globals: GLOBAL_MODULES,
          legacy: true,
          exports: exportType ? "default" : undefined,
          freeze: false
        }
      ]
    }
  );
}

export function buildTemplateConfig(
  packageName: string,
  packagePath: string,
  mode: "dev" | "release",
  packageID: string
) {
  validateTemplate(packageName, packagePath);
  const _jsFilePath = templateJSFilePath(packageName, packagePath);
  const _packageFilePath = templatePackageJSFilePath(packageName, packagePath);
  const _outputPath = templateOutputPath(packageName, packagePath, mode);

  let modeConfig;
  if (mode === "dev") {
    modeConfig = devConfig;
  } else {
  }

  if (!fs.existsSync(_outputPath)) {
    fs.mkdirSync(_outputPath, {
      recursive: true
    });
  }

  const moduleDirectory = [path.join(_outputPath, "../", "node_modules")];

  let exportType;
  try {
    let file = fs.readFileSync(_jsFilePath, "utf-8");
    let hasDefault = /\bexport\s*default\s*[a-zA-Z_$]/.test(file);
    let hasNamed =
      /\bexport\s*(let|const|var|async|function\*?)\s*[a-zA-Z_$*]/.test(file) ||
      /^\s*export\s*\{/m.test(file);
    if (hasDefault && hasNamed) exportType = "default";
  } catch (e) {}

  const pluginsConfig = [
    alias({
      __webthing_entry__: _jsFilePath,
      codeblog: "@webthing/core"
    }),
    nodeResolve({
      mainFields: ["module", "jsnext", "main"],
      customResolveOptions: {
        moduleDirectory
      }
    }),
    commonjs({
      include: /node_modules/
    }),
    json(),
    babelPlugin(BABEL_RC)
  ];

  return merge(
    {},
    {
      input: exportType ? WEBTHING_ENTRY_NORMALIZER : _jsFilePath,
      plugins: pluginsConfig,
      inlineDynamicImports: true,
      external: BUNDLED_MODULES,
      output: [
        {
          name: packageID,
          format: "umd",
          entryFileNames: "[name].js",
          assetFileNames: "[name].js",
          chunkFileNames: "[name].js",
          dir: _outputPath,
          globals: GLOBAL_MODULES,
          legacy: true,
          exports: exportType ? "default" : undefined,
          freeze: false
        },
        {
          format: "esm",
          name: packageID,
          entryFileNames: "[name].esm.js",
          assetFileNames: "[name].js",
          chunkFileNames: "[name].esm.js",
          dir: _outputPath,
          globals: GLOBAL_MODULES,
          legacy: true,
          exports: exportType ? "default" : undefined,
          freeze: false
        }
      ]
    }
  );
}
