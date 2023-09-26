const path = require("path");
const html_webpack_plugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    bundler: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    clean: true,
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js",
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3002,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  plugins: [
    new html_webpack_plugin({
      filename: "index.html",
      template: "src/index.html",
      title: "testing",
      chunks: ["bundler"],
    }),
  ],
};
