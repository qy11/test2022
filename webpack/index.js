export const add = (a, b) => {
  return a + b
}

const res = add(3, 5)

/**
 * Tree shaking  去除没有使用的代码 
 *  只支持 ES Module  不支持CommonJS
 * 
 * ES Module 静态引入  import export
 * CommonJS 动态引入  require module.exports
 * 
 * package.json
 *  -"sideEffects": false,  为了 babel/polyfill
 * 
 * devtool: 'cheap-module-souce-map',  //此选项控制是否生成，以及如何生成 source map。
 * 
 * devtool: 'source-map',  //development
 * 
 * webpack-merge // 组件抽离 融合
 * 
 * 代码分割 Code Splitting
 *    1.业务逻辑代码
 *    2.引入包的代码
 *   -splitChunks
 * 
 * optimization  最佳（优）化  webpack自动分割
 *    splitChunks: 
        chunks: "all", //共有三个值可选： initial (初始模块，同步代码分割)、async (按需加载模块，异步代码分割)和 all (全部模块都代码分割)
        minSize: 30000, // 模块超过30k自动被抽离成公共模块
      minChunks: 1, // 模块被引用>=1次，便分割
      name: true, // 默认由模块名+hash命名，名称相同时多个模块将合并为1个，可以设置为function
      automaticNameDelimiter: '~', // 命名分隔符
      cacheGroups: {
        default: { // 模块缓存规则，设置为false，默认缓存组将禁用
          minChunks: 2, // 模块被引用>=2次，拆分至vendors公共模块
          priority: -20, // 优先级
          reuseExistingChunk: true, // 默认使用已有的模块
        },
        vendor: {
         test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          priority: -10,// 确定模块打入的优先级
          reuseExistingChunk: true,// 使用复用已经存在的模块
          enforce: true,
        },
 * 懒加载 import('lodash').then(()) 也会执行代码分割
 * 
 * coreJs 补充了兼容性的方法
 */