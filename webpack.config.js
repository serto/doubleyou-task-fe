
const path = require('path');

const webpack = require('webpack');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist/")
  },
  devtool: 'source-map',  
  devServer: {
    historyApiFallback: true,
  },
  module : {
    rules : [
        {
            test : /\.js$/,
            loader : 'babel-loader',
            exclude: path.join(__dirname, "node_modules")
        },
        {
            test: /\.(css|scss)$/,
            loader: ["style-loader", "css-loader", "sass-loader"]
        },
        {
          test: /\.(jpg|png|gif|svg|pdf|ico)$/,
          use: [{
              loader: 'file-loader',
              options: {
                  name: '[name].[ext]',
                  outputPath: './widgetScripts/img'
              }
          }]
        }
    ]

  }
}