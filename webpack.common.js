require('babel-polyfill')
const path = require('path')
const fs = require('fs')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')
const webpack = require('webpack')

const htmlPlugin = new HtmlWebPackPlugin({
  template: path.join(__dirname, './src/index.html'),  //源文件
  filename: 'index.html'   //内存中生成的首页名称
})
const vueLoaderPlugin = new VueLoaderPlugin()
const cleanWebpackPlugin = new CleanWebpackPlugin()

const plugins = [
  htmlPlugin,
  vueLoaderPlugin,
  cleanWebpackPlugin,
]
const files = fs.readdirSync(path.resolve(__dirname, './dll/js'))
files.forEach(file => {
  if(/.*\.dll.js/.test(file)) {
    plugins.push(new AddAssetHtmlWebpackPlugin({
      filepath: path.resolve(__dirname, './dll/js', file)
    }))
  }
  if(/.*\.manifest.json/.test(file)) {
    plugins.push(new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname, './dll/js', file)
    }))
  }
})

module.exports = {
  entry: {
    app: ['babel-polyfill', './src/index.js']
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],//告诉解析器在解析路径资源中能够接受哪些扩展名（例如 .js, .jsx）
    alias: {
      src: path.resolve(__dirname, './src'),
    },
  },
  module: {
    rules: [
      {test: /\.(jpg|png|gif|bmp|jpeg)$/, use: ['url-loader?limit=20&name=images/[hash:8]-[name].[ext]']},
      {test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'},
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude:/node_modules/,
        sideEffects: false
      },
      {test: /\.vue$/, use: 'vue-loader'},
    ]
  },
  plugins,
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