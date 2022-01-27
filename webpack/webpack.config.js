/** */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: resolve('../src'),
    historyApiFallback: false,
    // open: true,
    // hot: true,
    proxy: {
      '/ocr': {
        target: 'http://47.114.135.227:8086', // 代理目标的基础路径 http://192.168.110.228:8086
        changeOrigin: true, // 支持跨域
        // pathRewrite: {  // 重写路径: 去掉路径中开头的'/api'  http://47.114.135.227:8086
        //   '^/ocr': ''  
        // }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        options: {
          presets: ['@babel/preset-env', {
            useBuiltIns: 'usage' //@babel/polyfill 按需
          }]
        },
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'imgs/',
            limit: 20480
          }
        },
      },
      {
        test: /\.(css|sass)$/,
        //loader 从下往上，从后往前 css-loader分析css的依赖
        use: [
          'style-loader',
          {
            use: "css-loader",
            options: {
              importLoaders: 2,
              modules: true  //css模块化
            }
          }
        ]
      },
      {
        test
      }
    ]
  },
  optimization: {
    usedExports: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('./src/index.html')
    }),
    new CleanWebpackPlugin(),
  ]
}