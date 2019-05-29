const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const PermissionsOutputPlugin = require("webpack-permissions-plugin");

const fileName =
  process.env.NODE_ENV === "production" ? "webthing" : "webthing-dev";

module.exports = {
  context: path.resolve(__dirname),
  entry: {
    [fileName]: path.resolve(__dirname, "./src/index.tsx")
  },
  output: {
    path: path.resolve(__dirname, `./bin`),
    filename: "[name]",
    globalObject: "global"
  },
  node: false,
  target: "node",
  optimization: {
    minimize: process.env.NODE_ENV === "production",
    namedModules: true,
    namedChunks: true,
    moduleIds: "named",
    portableRecords: true
  },
  resolve: {
    alias: {
      codeblog: "@webthing/core"
    },
    extensions: [".wasm", ".mjs", ".js", ".json", ".tsx", ".ts"]
  },
  plugins: [
    new PermissionsOutputPlugin({
      buildFiles: [
        {
          path: path.resolve(__dirname, "./bin", fileName),
          fileMode: "777"
        }
      ]
    }),
    new webpack.BannerPlugin({
      banner: "#!/usr/bin/env node",
      raw: true,
      entryOnly: true
    })
  ],
  mode: process.env.NODE_ENV || "development",
  module: {
    rules: [
      {
        test: [/\.js$/, /\.tsx$/, /\.ts$/],
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          babelrc: false,
          presets: [
            "@babel/preset-typescript",
            [
              "@babel/preset-env",
              {
                modules: "commonjs",
                targets: {
                  node: "8"
                }
              }
            ],
            "@babel/preset-react"
          ],
          plugins: [
            "babel-plugin-transform-css-import-to-string",
            [
              "transform-assets-import-to-string",
              {
                baseDir: "",
                baseUri: "https://codeblog-public.storage.googleapis.com"
              }
            ],
            "@babel/plugin-proposal-class-properties",
            "babel-plugin-transform-node-env-inline"
          ]
        }
      }
    ]
  }
};
