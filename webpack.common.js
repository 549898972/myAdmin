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
      {test: /\.(less|css)$/, use: ['style-loader', 'css-loader', 'less-loader']},
      {test: /\.(jpg|png|gif|bmp|jpeg)$/, use: ['url-loader?limit=20&name=[hash:8]-[name].[ext]']},
      {test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'},
      {test: /\.js&/, use: ['babel-loader'], exclude:/node_modules/ },
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
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          filename: 'vendors.js'   //将所有从node_modules引入的第三方库打包到vendors.js文件下
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
}