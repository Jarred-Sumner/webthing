import Bluebird from "bluebird";
import { exec } from "child_process";
import { fromPairs } from "lodash";
import path from "path";
import { rollup } from "rollup";
import { Stream } from "stream";
import streamLength from "stream-length";
import tar from "tar-stream";
import zlib from "zlib";
import {
  compilePackageJSFile,
  convertPackageJSToJSON
} from "./createPackagejSON";
import {
  jsFileName,
  jsFilePath,
  outputPath,
  packageJSFilename,
  packageJSFilePath,
  tgzFileName
} from "./packageUtils";
import { buildConfig } from "./rollup";
import fs from "fs-extra";
import chalk from "chalk";
import { YARN_BIN } from "./paths";

type FileMap = {
  [filepath: string]: Stream | string;
};

export const runYarnInstall = async (cwd: string) => {
  return new Promise((resolve, reject) => {
    exec(
      `cd ${cwd} && node ${YARN_BIN} install --no-lockfile --non-interactive --no-bin-links --ignore-engines --skip-integrity-check`,
      err => {
        if (err) {
          reject(
            err.message.indexOf("versions") >= 0
              ? new Error("INVALID_VERSION")
              : err
          );
        } else {
          resolve();
        }
      }
    );
  });
};

export const buildPackage = async (
  packageName: string,
  packagePath: string
) => {
  const _packageJSPath = packageJSFilePath(packageName, packagePath);
  const _relativePath = path.relative(process.cwd(), _packageJSPath);
  const packageJSCode = await compilePackageJSFile(_packageJSPath);

  console.log(chalk.bold.white("compile"), "./" + _relativePath);

  const packageJSON = await convertPackageJSToJSON(
    packageJSCode,
    packageName,
    packageJSFilePath(packageName, packagePath)
  );

  console.log(
    chalk.bold.white("convert"),
    "./" + _relativePath,
    "to package.json"
  );

  const _packageJSON = JSON.parse(packageJSON);

  const strLength = "description:".length;
  const _logProperty = prop =>
    chalk.keyword("gray")(prop.padStart(strLength, " "));
  console.log(chalk.keyword("gray")("---"));
  console.log(_logProperty("ID:"), chalk.keyword("white")(_packageJSON.name));
  console.log(_logProperty("public:"), chalk.keyword("white")("yes"));

  console.log(
    _logProperty("title:"),
    chalk.keyword("white")(_packageJSON.webthing.title)
  );

  console.log(
    _logProperty("description:"),
    chalk.keyword("white")(_packageJSON.webthing.description)
  );

  console.log(
    _logProperty("category:"),
    chalk.keyword("white")(_packageJSON.webthing.category)
  );
  console.log(chalk.keyword("gray")("---"));

  const files: FileMap = {
    "package.json": packageJSON,
    [`dist/${packageJSFilename(packageName)}`]: packageJSCode,
    [`src/${packageJSFilename(packageName)}`]: fs.readFileSync(
      packageJSFilePath(packageName, packagePath),
      "utf8"
    ),
    [`src/${jsFileName(packageName)}`]: fs.readFileSync(
      jsFilePath(packageName, packagePath),
      "utf8"
    )
  };

  const _outputPath = outputPath(packageName, packagePath, "release");

  try {
    await fs.mkdirp(path.join(_outputPath, "dist"));
  } catch (exception) {}

  try {
    await fs.mkdirp(path.join(_outputPath, "src"));
  } catch (exception) {}

  await Bluebird.map(
    Object.keys(files),
    _filePath => {
      const filePath = path.join(_outputPath, _filePath);
      return fs.writeFile(filePath, files[_filePath], {
        encoding: "utf8"
      });
    },
    { concurrency: 2 }
  );

  await runYarnInstall(_outputPath);

  console.log(chalk.bold.white("install"), "dependencies");

  const metadata = JSON.parse(packageJSON);

  const rollupConfig = buildConfig(
    packageName,
    packagePath,
    "release",
    metadata.name,
    Object.keys(metadata.dependencies || {})
  );

  const { output: outputs, ..._rollupConfig } = rollupConfig;

  const rolledUp = await rollup(_rollupConfig);
  const bundles = fromPairs(
    await Promise.all(
      outputs.map(async outputOptions => {
        const result = await rolledUp.generate(outputOptions);
        const {
          output: [{ code, fileName }]
        } = result;

        return [
          path.join("dist", path.basename(fileName, ".js") + ".js"),
          code
        ];
      })
    )
  );

  console.log(chalk.bold.white("bundle"), packageName);

  const _files = Object.assign(files, bundles);
  return { files: _files, metadata: packageJSON };
};

export const buildTGZ = async (files: FileMap) => {
  const pack = tar.pack();

  await Bluebird.map(
    Object.keys(files),
    filePath => {
      const content = files[filePath];

      if (typeof content === "string") {
        return new Bluebird((resolve, reject) => {
          pack.entry({ name: filePath }, content, err => {
            if (err) {
              console.error(err);
              reject(err);
            } else {
              resolve();
            }
          });
        });
      } else {
        return new Bluebird((resolve, reject) => {
          return streamLength(content).then(size => {
            const entry = pack.entry({ name: filePath, size }, (err, ...a) => {
              if (err) {
                reject(err);
              } else {
                console.error(a);
                resolve();
              }
            });
            content.pipe(entry);
          });
        });
      }
    },
    { concurrency: 1 }
  );
  pack.finalize();
  return pack;
};

export const saveTGZ = (
  tarStream: Stream,
  packageName: string,
  packagePath: string
): Promise<Stream> => {
  return new Promise((resolve, reject) => {
    const _tgzPath = path.join(
      outputPath(packageName, packagePath, "release"),
      tgzFileName(packageName)
    );
    const writeStream = fs.createWriteStream(_tgzPath);

    const gzip = zlib.createGzip();

    tarStream
      .pipe(gzip)
      .pipe(writeStream)
      .on("close", () => {
        fs.stat(_tgzPath, function(err) {
          if (err) {
            reject(err);
            return;
          }
          resolve(fs.createReadStream(_tgzPath));
        });
      });
  });
};
