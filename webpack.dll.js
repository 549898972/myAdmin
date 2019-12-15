const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry: {
    vendors: ['vue', 'vue-router', 'vuex', 'element-ui', 'echarts'],
  },
  output: {
    filename: "js/[name].dll.js",
    path: path.resolve(__dirname, './dll'),
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.resolve(__dirname, './dll/js/[name].manifest.json')
    })
  ]
}