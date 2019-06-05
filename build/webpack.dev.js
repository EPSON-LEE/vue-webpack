// webpack.demo.js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const markdownRender = require('markdown-it')()

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

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
        use: ['babel-loader'],
        include: [resolve('examples'), resolve('src')]
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'vue-loader'
          },
          {
            loader: 'vue-markdown-loader/lib/markdown-compiler',
            options: {
              raw: true,
              preventExtract: true,
              use: [
                [
                  require('markdown-it-container'),
                  'demo',
                  {
                    validate: function(params) {
                      return params.trim().match(/^demo\s+(.*)$/)
                    },

                    render: function(tokens, idx) {
                      if (tokens[idx].nesting === 1) {
                        // 1.获取第一行的内容使用markdown渲染html作为组件的描述
                        let demoInfo = tokens[idx].info
                          .trim()
                          .match(/^demo\s+(.*)$/)
                        let description =
                          demoInfo && demoInfo.length > 1 ? demoInfo[1] : ''
                        let descriptionHTML = description
                          ? markdownRender.render(description)
                          : ''
                        // 2.获取代码块内的html和js代码
                        let content = tokens[idx + 1].content
                        // 3.使用自定义开发组件【DemoBlock】来包裹内容并且渲染成案例和代码示例
                        return `<demo-block>
                        <div class="source" slot="source">${content}</div>
                        ${descriptionHTML}
                        <div class="highlight" slot="highlight">`
                      } else {
                        return '</div></demo-block>\n'
                      }
                    }
                  }
                ]
              ]
            }
          }
        ]
      }
    ]
  },
  resolve: {
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
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
