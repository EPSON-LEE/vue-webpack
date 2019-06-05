const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: path.join(__dirname, '../src/main.js'),
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js'
  }
  // modules: {
  //   rules: [
  //     {
  //       test: /\.vue$/,
  //       loader: 'vue-loader'
  //     }
  //   ]
  // },
  // plugins: [new VueLoaderPlugin()]
}
