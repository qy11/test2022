/**
 * 懒加载
 * import Foo = () => import('./Foo')
 * 
 * module  chunk bundle
 * 模块     块    捆
 * 根据模块形成的代码块打包生成bundle
 */

/**
* css代码分割
* CSS in JS 
* MiniCssExtractPlugin
* optimize-css-assets-webpack-plugin 压缩
 */

/**
 * 浏览器缓存
 *   -使用 hash 方式
 *     output: {
        path: resolve('../dist'),
        filename: devMode ? 'js/[name].[hash].js' : 'js/[name].[contenthash].js',
        chunkFilename: devMode ? 'chunks/[name].[hash:4].js' : 'chunks/[name].[contenthash].js',
      },
*/

/***
 * Shimming 预置依赖 填隙 不推荐使用全局依赖
 * jquery 全局使用
 * new webpack.ProvidePlugin({
      '$': 'jquery'
    })

 * npm info webpack versions  查看webpack所有版本
 */

/**
 * webpack5
 *    -
 * webpack4
 * 
 * output:{
 *  environment: {  // 不使用箭头函数
      arrowFunction: false
    }
 * }
 * 
 * defaultVendors
 */


/**
 * 优化
 *    -产出代码体积
 * 
 * loaders: [{
    loader: 'babel-loader',
    options: {
      // babelrc: true,
      cacheDirectory: true // 启用缓存
    }
  }],
 */

/**
 * js单线程
 * nodeJs基于js单线程
 * webpack基于nodeJs单线程 -> 多进程打包 多核cpu happyPack、terser-webpack-plugin
 * webpack-dev-server  WDS  热更新HMR
 * () => import 懒加载 
 * 热更新
 *    -新代码生效，网页不刷新，状态不丢失
 *    -devServer  hot: true,
 * 自动刷新
 *    -页面重新加载
 */

/**
 * "DLL" 一词代表微软最初引入的动态链接库
 *      -提高打包速度，像react些的 源码没必要每一次都要打包
 *      -预先打包 放在react.dll.js 引用react代码
 * 
 * 优化打包构建速度  -> 开发环境
 *    -1.babel-loader,范围设置include
 *    -2.IgnorePlugin 避免引入不必要模块
 *    -3.noParse 避免打包已经打包过后的代码
 *    -4.happyPack parallelUglifyPlugin 多进程打包 
 *    只能用开发环境
 *      -热更新、自动刷新
 *      -dllPlugin 预先打包
 * 优化产出代码体积
 *    -代码体积小，加载更快
 *    -合理分包，不重复加载   
 *    -程序运行速度更快，内存占用更小
 *    --
 *    -图片比较小的时候，采用base64格式 url-loader
  *    -use: {
            loader: 'url-loader',
            options: {
              limit: 8 * 1024,
              outputPath: '/img/'
            }
          }

          output: {
            path: resolve('../dist'),
            filename: devMode ? 'js/[name].[hash].js' : 'js/[name].[contenthash:8].js',
            chunkFilename: devMode ? 'chunks/[name].[hash:4].js' : 'chunks/[name].[contenthash].js',
            environment: {
              arrowFunction: false
            }
          },
          hash值，如果内容改变就会变化 hash 值
          
 */