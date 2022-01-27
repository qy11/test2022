module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash:8].js',
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
    chunks: "all",
    minSize: 30000,
    minChunks: 1,
    usedExports: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('./src/index.html')
    }),
    new CleanWebpackPlugin(),
  ]
}