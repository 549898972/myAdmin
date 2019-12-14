const merge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
const devConfig = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    overlay: true
  },
  module: {
    rules: [
      {test: /\.(less|css)$/, use: ['style-loader', 'css-loader', 'less-loader']},
    ]
  },
  output: {
    filename: '[name].js',
    chunkFilename: "[name].js",
  }
}
module.exports = merge(commonConfig, devConfig)