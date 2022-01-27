/** */
var net = require('net')
var server = net.createServer()
server.listen(12306, '127.0.0.1')
server.on('listening', () => {
  console.log('启动');
  // console.log(server.address()); //{ address: '127.0.0.1', family: 'IPv4', port: 12306 }
})
server.on('connection', socket => {
  console.log('新链接');
  socket.on('data', (data) => { //data事件读取
    console.log(data.toString()); //hello server
  })
  socket.write('给客户端的数据')
  socket.on('close', () => {
    console.log('close');
    server.close()
  })
})
server.on('close', () => {
  console.log('服务器关闭');
})