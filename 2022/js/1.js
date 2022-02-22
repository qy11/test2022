import M from './2.js';
M(
  [
    function test1(next) {
      console.log('test1')
      next()
    },
    function test2(next) {
      console.log('test2')
      next()
    },
    function test3(next) {
      console.log('test3')
      next()
    },
    function test4(next) {
      console.log('test4')
      next()
    }
  ]
)