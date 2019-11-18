const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
const prodConfig = {
  mode: 'production', 
  devtool: 'cheap-module-source-map',
  plugins: [
    new MiniCssExtractPlugin({}),
  ],
  optimization: {
    minimizer:[new OptimizeCSSAssetsPlugin({})]
  },
  module: {
    rules: [
      {test: /\.(less|css)$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']}
    ],
  },
  output: {
    filename: '[name]-[contenthash].js',
    chunkFilename: "[name]-[contenthash]-chunk.js",
  }
}
module.exports = merge(commonConfig, prodConfig)