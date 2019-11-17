require('babel-polyfill')
const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const htmlPlugin = new HtmlWebPackPlugin({
  template: path.join(__dirname, './src/index.html'),  //源文件
  filename: 'index.html'   //内存中生成的首页名称
})
const vueLoaderPlugin = new VueLoaderPlugin()
const cleanWebpackPlugin = new CleanWebpackPlugin()

module.exports = {
  entry: {
    app: ['babel-polyfill', './src/index.js']
  },
  module: {
    rules: [
      {test: /\.(jpg|png|gif|bmp|jpeg)$/, use: ['url-loader?limit=20&name=[hash:8]-[name].[ext]']},
      {test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'},
      {test: /\.js$/, use: 'babel-loader', exclude:/node_modules/ },
      {test: /\.vue$/, use: 'vue-loader'},
    ]
  },
  plugins: [
    htmlPlugin,
    vueLoaderPlugin,
    cleanWebpackPlugin,
  ],
  optimization: {
    splitChunks: {
      chunks: "all",   //只对异步代码分割，如果改为all，也会对同步的代码进行分割，但还需要cacheGroups的vendors配置的配合
    },
    runtimeChunk: {
      name: 'runtime'  //每次打包如果内容发生了变化，hash值才变化
    }
  },
  output: {
    path: path.resolve(__dirname, './dist')
  }
}