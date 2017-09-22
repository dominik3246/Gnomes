const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/js/index.js', './src/sass/style.scss'],
  output: {
    path: `${__dirname}/dist/`,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.(png|jpg)$/,
        use: ['file-loader?name=[name].[ext]&outputPath=images/', 'image-webpack-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015', 'stage-0'],
            plugins: ['react-html-attrs', 'transform-decorators-legacy'],
          },
        },
      },
    ],
  },
  devServer: {
    port: 3000,
    contentBase: './dist',
    inline: true,
    hot: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', 'json'],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].bundle.css',
      allChunks: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './dist/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
    new webpack.NamedModulesPlugin(),
  ],
};
