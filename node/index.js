/**
 * npm root -g 包对应的路径
 */
/**
 * Buffer 缓冲器 流
 */
/**
 * utf-8 (最多4个字节表示一个字符)
 * utf-16
 * utf-32
 * 二进制流(比如：拷贝数据)
 *
 * Buffer 缓冲区
 *  1.操作二进制数据流
 *  2.<Buffer 74 86 73 74> 16进制数字 0~255
 *  3.实例 类似于整数数组
 *  4.大小固定
 *  5.slab动态内存管理机制(C++)  FreeBSD
 */

/**
 * events 事件触发器
 */
// const Event = require("events");
// class Cust extends Event {}
// const ce = new Cust();
// ce.on("test", (data, data1) => {
//   console.log(data, data1); //"hello", 123
// });
// ce.emit("test", "hello", 123);

/**
 * once只响应一次
 */
// ce.once("test", (data, time) => {
//   console.log(data, time);
// });
// setInterval(() => {
//   ce.emit("test", "hello", Date.now());
// }, 2000);

// function fn1() {
//   console.log("fn1");
// }
// function fn2() {
//   console.log("fn2");
// }
// ce.on("test", fn1);
// ce.on("test", fn2);
// setInterval(() => {
//   ce.emit("test");
// }, 1000);
// setInterval(() => {
//   // ce.removeListener("test", fn2);
//   // ce.off("test", fn2);
//   ce.removeAllListeners("test"); // 全部移除
// });
/**
 * defaultMaxListeners 最多可为任何单个事件注册 10 个监听器
 * getMaxListeners 最大监听器数的值
 */

/**
 * error-first 错误优先原则
 * fs 文件系统 基于linux
 */
// const fs = require("fs");
// fs.readFile("./read.md", (err, data) => {
//   if (err) throw err;
//   // console.log(data); //<Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64 0d 0a>
//   console.log(data.toString()); //hello world
// });
// fs.readFile("./read.md", "utf8", (err, data) => {
//   // utf8 默认 null
//   if (err) throw err;
//   console.log(data); //hello world
// });

// let res = fs.readFileSync('./read.md') //同步(一次只能处理一次请求，基本不用)
// console.log(res);


// fs.writeFile('./index1.js', 'this is 1', (err, data) => { //写入
//   if (err) return
//   console.log(data);
// })
// const content = Buffer.from('this is buffer')
// fs.writeFile('./index1.js', content, (err, data) => { //写入
//   if (err) return
//   console.log(data);
// })


/**stat*/
// fs.stat('./index.js', (err, data) => {
//   if (err) throw err
//   console.log(data);
//   console.log(data.isFile()); //true
// })

/**rename */
// fs.rename('index1.js', 'newTest', (err, data) => {

// })
/**unlink 删除
 *
 */

/**
 * 文件夹
 * 读取 readdir
 */
// fs.readdir('../openlayer', (err, data) => {
//   if (err) console.log(err);
//   console.log(data);
// })

/**
 * mkdir 新建文件夹
*/
// fs.mkdir('./index3.js', err => {
//   if (err) throw err
//   console.log('done');
// })
/**
 * rmdir 删除
*/

/**
 * watch 监听
 *  change rename
*/
// fs.watch('./', {
//   recursive: true
// }, (eventType, fileName) => {
//   console.log(eventType, fileName);
// })

var a = 10;
console.log(arguments);