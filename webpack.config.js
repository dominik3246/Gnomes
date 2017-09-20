const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["./src/js/index.js", "./src/sass/style.scss"],
  output: {
    path: __dirname + "/dist/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        // regular css files
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(sass|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  devServer: {
    port: 3000,
    contentBase: "./dist",
    hot: true
  },
  plugins: [
    new ExtractTextPlugin({
      // define where to save the file
      filename: "[name].bundle.css",
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: "./dist/index.html",
      filename: "index.html",
      inject: "body"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
};
