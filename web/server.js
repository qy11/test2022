//
const globalConf = require('./conf');
const net = require('net')
const fs = require('fs')

let server = net.createServer()
server.listen(globalConf.port, '127.0.0.1')

server.on('listening', () => {
  console.log('server is running');
});
server.on('connection', socket => {
  socket.on('data', data => {
    let url = data.toString().split('\r\n')[0].split(' ')[1];
    console.log(url, __dirname + globalConf.path + url);

    try {
      let dataFile = fs.readFileSync(__dirname + globalConf.path + url);
      socket.write("HTTP 200OK\r\n\r\n");
      socket.write(dataFile);
    } catch (e) {
      socket.write('HTTP 404');
    }

    socket.end()
  })
})