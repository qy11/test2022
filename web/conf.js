const fs = require('fs');
// const readFile = require('readFile')
let globalConf = {}

let conf = fs.readFileSync('./server.conf')
let confs = conf.toString().split('\r\n');
confs.forEach(item => {
  var itemConf = item.split('=');
  globalConf[itemConf[0]] = itemConf[1]
})
module.exports = globalConf