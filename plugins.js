const path = require("path");
const _StyleLintPlugin = require("stylelint-webpack-plugin");
const _MiniCssExtractPlugin = require("mini-css-extract-plugin");

const MiniCssExtractPlugin = new _MiniCssExtractPlugin({
  filename: "[name].bundle.css",
  chunkFilename: "[id].css",
});

const StyleLintPlugin = new _StyleLintPlugin({
  configFile: path.resolve(__dirname, "stylelint.config.js"),
  context: path.resolve(__dirname, "webpack"),
  files: "**/*.css",
  failOnError: false,
  quiet: false,
});

module.exports = {
  MiniCssExtractPlugin: MiniCssExtractPlugin,
  StyleLintPlugin: StyleLintPlugin,
};
