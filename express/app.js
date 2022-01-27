const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const adminRoutes = require('./router/admin')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(adminRoutes)

// app.use('/', (req, res, next) => {
//   res.send('<h1>hello,express</h1>')
//   next()
// })


app.listen(3000)


/**
 * 进程
 *    -负责为程序的运行提供必备环境
 *    -相当于工厂的车间
 * 
 * 线程
 *    -计算机中最小计算单位，负责执行进程中的程序 
 *    -相当于工厂中的工人
 * 
 * 单线程
 *    -js
 * 
 * node.js
 *    -在服务器端运行javaScript
 *    -
 * 
 * I/O 操作数据库(阻塞) 过程最耗费性能
 * nodejs V8高性能web服务器
 * 
 */

/**
 * ECMA缺陷
 *    -没有模块化系统
 *    -标准化较少
 *    
 *  CommonJS 提供了模块 nodeJs
 *    -exports
 */

/**
 * node中在最顶部添加以下代码
 * function (exports, require, module, __filename, __dirname){}
 *    -exports
 *        - 暴露出去
 *    -require
 *        - 引入外部模块
 *    -module
 *        - 当前模块本身
 *        -exports是module的属性
 *        -
 *    -filename
 *        -当前模块完整路径
 *    -dirname
 *        -当前模块所在文件夹路径
 */

/**
 *  var obj1 = {}
 * obj1.name = 'tt'
 * var obj2 = obj1;
 * // obj2.name = 'uu'
 * obj2 = 'uu' // 改变量 还是改对象
 * console.log(obj1, obj2)
 *
 * exports 和 module.exports
 * 
 * mongodbmanagerfree
 */