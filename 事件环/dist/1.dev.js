"use strict";

/**
 * 事件环 Event Loop 
 * 进程
 *  -CPU正在进行的一个任务的运行过程的调度单位
 *  -浏览器是一个多进程的应用程序
 *  -进程是计算机调度的基本单位
 * 
 *  -进程包含线程，线程在进程中运行
 * 
 *  -浏览器有一个主进程（用户界面）
 *  -每一个tab各自独立的渲染进程（浏览器内核Renderer,渲染引擎）、网络进程（网络请求）、GPU（动画与3D绘制）、插件进程（devtool）
 *  -每个进程包含了多个线程运行
 * 
 *  -GUI渲染页面（渲染页面）
 *      -解析HTML、CSS
 *      -构建DOM/Render树
 *      -初始布局与绘制
 *      -重绘与回流
 *  -JS引擎线程
 *      -一个主线程和多个辅助线程配合
 *      -一个浏览器只有一个JS引擎
 *  -GUI渲染与JS引擎线程运行互斥（保证操作DOM的唯一性）
 * 
 * 渲染进程 - 事件
 * 事件触发线程：事件环EventLoop线程
 * 事件线程：用户交互事件、setTimeout、ajax
 * 
 * 渲染进程 - 宏任务 微任务
 * 创建线程的目的是为了实现异步的执行条件
 * 宏任务：宿主（浏览器）提供的异步方法和任务
 *    -script setTimeout UI渲染 ajax click mouseover 
 * 微任务:语言标准 ECMA262 提供API
 *    -Promise.then
 * 为什么有宏任务和微任务的区分？
 *    -优先级 
 *    -放入任务队列，之后，回调函数作为要处理的任务
*/

/***/
// document.body.style.backgroundColor = 'orange'
// console.log(1);
// setTimeout(() => {
//   document.body.style.background = 'blue'
//   console.log(2);
// }, 100)
// Promise.resolve(3).then(num => {
//   document.body.style.backgroundColor = 'green'
//   console.log(num);
// })
// console.log(4);

/**
 * bgColor: orange -> 没渲染
 * 1
 * 4
 * bagColor: green -> 渲染
 * 3
 * bgColor: blue -> 没渲染
 * 2
 * bgColor: blue -> 渲染
*/

/***/
// Promise.resolve().then(() => {
//   console.log('p1');
//   setTimeout(function () {
//     console.log('s2');
//   })
// })
// setTimeout(() => {
//   console.log('s1');
//   Promise.resolve().then(() => {
//     console.log('p2');
//   })
// })

/**
 * p1
 * s1
 * p2
 * s2
*/
// Promise.resolve().then(() => {
//   console.log('p1');
//   setTimeout(function () {
//     console.log('s2-1');
//   })
//   setTimeout(() => {
//     console.log('s2-2');
//   })
// });
// setTimeout(() => {
//   console.log('s1');
//   Promise.resolve().then(() => {
//     console.log('p2-1');
//   }).then(() => {
//     console.log('p2-2');
//   })
// })

/**
   * p1
   * s1
   * p2-1
   * p2-2
   * s2-1
   * s2-2
  */
// Promise.resolve().then(() => {
//   console.log('p1');
//   setTimeout(function () {
//     console.log('s2-1');
//   })
//   setTimeout(() => {
//     console.log('s2-2');
//   })
// }, 100);
// setTimeout(() => {
//   console.log('s1');
//   Promise.resolve().then(() => {
//     console.log('p2-1');
//   }).then(() => {
//     console.log('p2-2');
//   })
// }, 500)

/**
 * p1
 * s2-1
 * s2-2
 * s1
 * p2-1
 * p2-2
*/

/***/
console.log(1);
setTimeout(function () {
  console.log(2);
});
new Promise(function (resolve, reject) {
  console.log(3); // resolve()

  console.log(4);
}).then(function (res) {
  console.log(5);
});
console.log(6);
/**
 * 1
 * 3
 * 4
 * 6
 * 5
 * 2
 * 
 * 同步代码 -> 微任务代码 -> 渲染 -> 宏任务代码
 * 
 * 微宏 -> 为了模拟多线程
*/