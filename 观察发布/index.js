// ; (function () {

//   const target = new Target({
//     username: '二地方凯乐科技',
//     password: 12345,
//     age: 18,
//     gender: 'male'
//   })

//   const init = () => {
//     target.age = 35
//   }
//   init()
// })();


// var fetch = require('node-fetch');

// function* gen() {
//   var url = 'https://api.github.com/users/github';
//   var result = yield fetch(url);
//   console.log(result.bio);
// }
// const g = gen()
// g.next()

function* genFn(x) {
  var y = yield x + 1;
  return y;
}
var g = genFn(1);
g.next() // { value: 2, done: false }
g.next() // { value: undefined, done: true }