"use strict";

var path = require("path");
var moduleDefinition = require("./moduleDefinition");
var directories = require("./directories");

const entry = { bundle: [path.join(directories.ROOT, "demo/index.tsx")] };

module.exports = {
  cache: false,
  mode: "development",
  entry,
  module: moduleDefinition,
  devServer: {
    static: "./demo",
    compress: true,
    port: 9000,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  output: {
    publicPath: "/demo/",
  },
};
