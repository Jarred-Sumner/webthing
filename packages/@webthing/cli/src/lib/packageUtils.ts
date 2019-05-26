import filenamify from "filenamify";
import path from "path";
import rimraf from "rimraf";

export const packageJSFilename = (name: string) =>
  filenamify(`${name}.package.js`, { replacement: "-" });
export const packageJSFilePath = (packageName: string, packagePath: string) => {
  return path.join(packagePath, packageJSFilename(packageName));
};

export const templateJSFilename = () => "template.js";
export const templateJSFilePath = (
  packageName: string,
  packagePath: string
) => {
  return path.join(packagePath, templateJSFilename());
};

export const templatePackageFilename = () => "template.package.js";
export const templatePackageJSFilePath = (
  packageName: string,
  packagePath: string
) => {
  return path.join(packagePath, templatePackageFilename());
};

export const templatePackageJSONPath = (packagePath: string) =>
  path.join(path.dirname(packagePath), "package.json");

export const jsFileName = (name: string) =>
  filenamify(`${name}.js`, { replacement: "-" });
export const jsFilePath = (packageName: string, packagePath: string) => {
  return path.join(packagePath, jsFileName(packageName));
};

export const tgzFileName = (name: string) =>
  filenamify(`${name}.tgz`, { replacement: "-" });
export const tgzFilePath = (packageName: string, packagePath: string) => {
  return path.join(packagePath, tgzFileName(packageName));
};

export const clearOutputPath = (dest: string) => {
  return new Promise((resolve, reject) => {
    if (!dest.includes(".webthing")) {
      console.error(
        "Tried to delete the wrong directory... out of an abundance of caution, gonna just go ahead and quit"
      );
      process.exit();
      return;
    }

    rimraf(dest, err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

export const outputPath = (
  packageName: string,
  _packagePath: string,
  mode: "dev" | "release"
) => path.join(process.env.HOME, `.webthing-${mode}`, packageName);

export const templateOutputPath = (
  packageName: string,
  _packagePath: string,
  mode: "dev" | "release"
) => path.join(_packagePath, `.webthing-${mode}`);
