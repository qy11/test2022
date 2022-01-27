/**
 *  process 进程
 *    -argv [0] 执行文件 [1] 当前文件
 *    -execArgv  --harmony 命令之间传入的参数
 *    -execPath 执行文件的绝对路径
 *    -env 对应环境
 *    -cwd 对应路径
 *    -nextTick
 */
// console.log(process);
// console.log(process.argv);//[ 'C:\\Program Files\\nodejs\\node.exe', 'C:\\Users\\qy\\Desktop\\test\\node\\process'\]
// console.log(process.execPath); //C:\Program Files\nodejs\node.exe
// console.log(process.env);
/**
 * js 事件循环
 *  事件(任务)队列通过事件轮询执行
 *
 * 宏任务：主线程中按序执行 task => task 回调函数 setTimeout setInterval setImmidate/node
 * 微任务：task完成后插入进来； promise process.nextTick()/node
 */
// Promise.resolve()
/**
 * libuv
 *
 * nextTick
*/

// setTimeout(() => { console.log(1) })
// setImmediate(() => { console.log(2) })
// process.nextTick(() => console.log(3))
// Promise.resolve().then(() => console.log(4));
// (() => console.log(5))();

/**
 * 5
3
4
1
2
 */

// setTimeout(() => {
//   console.log('timer1');
//   Promise.resolve().then(() => {
//     console.log('p1');
//   })
// })
// setTimeout(() => {
//   console.log('timer2');
//   Promise.resolve().then(() => {
//     console.log('p2');
//   })
// })
/**timer1
p1
timer2
p2 */

/**
 * net 网络
 *    -1网络层 http(80) ftp(文件传输协议 21) SMTP(邮件发送 25) DNS(域名解析) 基于浏览器
 *    -2传输层(运输层)TCP()  UDP(广播,不在意是否收到)
 *    -3网络层 IP ICMP
 *    -4....
 *
 * TCP/IP 包含 应用层 传输层 网络层
 *
 * 报文
 */

var net = require('net')
var server = net.createServer()
server.listen(12306, '127.0.0.1')
server.on('listening', () => {
  console.log('启动');
})
server.on('connection', socket => {
  console.log('新链接');
  socket.on('data', (data) => {
    console.log(data.toString());
    socket.write('HTTP 200OK\r\nContentType: text/html\r\n\r\n<html><body>hello  Browser</body></html>') //响应头
    socket.end()
  })

})

/**
 *      net 
 * client Socket Server
 */

