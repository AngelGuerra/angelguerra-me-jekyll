const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const JSLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-env"],
    },
  },
};

const ESLintLoader = {
  test: /\.js$/,
  enforce: "pre",
  exclude: /node_modules/,
  use: {
    loader: "eslint-loader",
    options: {
      configFile: `${__dirname}/.eslintrc`,
    },
  },
};

const CSSLoader = {
  test: /\.css$/,
  exclude: /node_modules/,
  use: [
    // "style-loader",
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: `${__dirname}/assets/css/`,
      },
    },
    {
      loader: "css-loader",
      options: { importLoaders: 1 },
    },
    {
      loader: "postcss-loader",
    },
  ],
};

module.exports = {
  JSLoader: JSLoader,
  ESLintLoader: ESLintLoader,
  CSSLoader: CSSLoader,
};
