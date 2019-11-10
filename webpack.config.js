const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname, './src/index.html'),  //源文件
    filename: 'index.html'   //内存中生成的首页名称
})

const vueLoaderPlugin = new VueLoaderPlugin()

module.exports = {
    mode: 'development',   //development、production
    entry: {
        app: ['babel-polyfill', './src/index.js']
    },
    plugins: [
        htmlPlugin,
        vueLoaderPlugin
    ],
    module: {
        rules: [
            {test: /\.(less|css)$/, use: ['style-loader', 'css-loader', 'less-loader']},
            {test: /\.(jpg|png|gif|bmp|jpeg)$/, use: ['url-loader?limit=20&name=[hash:8]-[name].[ext]']},
            {test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'},
            {test: /\.js&/, use: ['babel-loader'], exclude:/node_modules/ },
            {test: /\.vue$/, use: 'vue-loader'},
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
    },
    devtool: 'source-map',
}

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}