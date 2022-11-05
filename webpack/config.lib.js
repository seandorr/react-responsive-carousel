"use strict";

var path = require("path");
var moduleDefinition = require("./moduleDefinition");
var directories = require("./directories");
const packagejson = require("../package.json");

const libraryName = packagejson.name;

module.exports = {
  cache: false,
  context: path.join(directories.SRC, "ts"),
  mode: "production",
  resolve: {
    extensions: [".js", ".jsx", ".tsx", ".ts", ".json"],
  },
  externals: [
    {
      react: {
        root: "React",
        commonjs2: "react",
        commonjs: "react",
        amd: "react",
      },
      "react-dom": {
        root: "ReactDOM",
        commonjs2: "react-dom",
        commonjs: "react-dom",
        amd: "react-dom",
      },
    },
  ],
  module: moduleDefinition,
  optimization: {
    minimize: true,
    chunkIds: "total-size",
    moduleIds: "size",
  },
  entry: {
    main: "./index.ts",
  },
  output: {
    library: {
      name: libraryName,
      type: "umd",
    },
    path: path.join(directories.ROOT, "lib/"),
    filename: "index.js",
  },
};
