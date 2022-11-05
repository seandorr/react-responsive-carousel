"use strict";

var directories = require("./directories");

module.exports = {
  rules: [
    {
      test: /\.json$/,
      loader: "json-loader",
    },
    {
      test: /\.tsx?$/,
      use: "ts-loader",
      include: [directories.SRC, directories.DEMO],
      exclude: /node_modules/,
    },
    {
      test: /\.s[ac]ss$/i,
      use: ["style-loader", "css-loader", "sass-loader"],
    },
  ],
};
