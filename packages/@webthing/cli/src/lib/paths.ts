export const HOME_DIR = __non_webpack_require__("os").homedir();

export const WEBTHING_BIN_FILENAME =
  process.env.NODE_ENV === "production" ? "webthing" : "webthing-dev";

export const CLI_ROOT = __non_webpack_require__("path").resolve(
  __dirname,
  "../"
);

export const YARN_BIN = __non_webpack_require__("path").join(
  CLI_ROOT,
  "./bin/yarn-1.16.0.js"
);
export const WEBTHING_BIN = __non_webpack_require__("path").join(
  CLI_ROOT,
  `./bin/`,
  WEBTHING_BIN_FILENAME
);

export const STATIC_FOLDER = __non_webpack_require__("path").join(
  CLI_ROOT,
  "static"
);
export const WEBTHING_ENTRY_NORMALIZER = __non_webpack_require__("path").join(
  STATIC_FOLDER,
  "exportNormalizer.js"
);
