const path = require("path");
const loaders = require("./loaders");
const plugins = require("./plugins");

module.exports = {
  mode: "production",
  entry: [path.join(__dirname, "webpack", "app.js"), path.join(__dirname, "webpack", "app.css")],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "assets/webpack"),
  },
  module: {
    rules: [loaders.JSLoader, loaders.ESLintLoader, loaders.CSSLoader],
  },
  plugins: [plugins.MiniCssExtractPlugin, plugins.StyleLintPlugin],
  resolve: {
    extensions: [".json", ".js"],
  },
};
