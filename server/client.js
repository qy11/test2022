/**
 * socket 模拟客户端
 *   -可读可写的流stream
 */
var net = require('net')

var socket = net.connect(12306, '127.0.0.1')
socket.setTimeout(2000)
socket.on('connect', () => {
  console.log('已经链接到服务器');
  console.log(socket.remoteAddress);
  console.log(socket.remotePort);
  console.log(socket.localAddress);
})
socket.write('hello server')//写入服务端
socket.on('data', (data) => { //服务端传回来的数据
  console.log(data.toString()); //给客户端的数据
  socket.end()
})
socket.on('close', () => {
  console.log('关闭');
})
socket.on('timeout', () => {
  console.log('超时了');
})