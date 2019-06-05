// webpack.demo.js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: path.join(__dirname, '../example/main.js'),
  output: {
    filename: 'bundle.js',
    // publicPath: '/dev/',
    path: path.join(__dirname, '../dist')
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'Test',
      // 生成Html文件的名称
      filename: 'index.html',
      // 使用的html文件模板
      template: path.join(__dirname, '../public/index.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.css$/,
        loaders: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        loaders: ['vue-style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue: 'vue/dist/vue.esm.js'
    }
  },
  // webpackDevServer 打包出来的文件都在内存中而没有打包到磁盘中
  devServer: {
    // 在服务器的哪个位置
    hot: true,
    // 打包生成的静态文件所在的位置
    // publicPath: '/dist/',
    publicPath: '/',
    // 决定了 webpackDevServer 启动时服务器资源的根目录，默认是项目的根目录。
    // contentBase: path.join(__dirname, '../dist'),
    compress: true,
    port: 9000
  }
}
