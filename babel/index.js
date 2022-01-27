/**
 * babel-polyfill
 * 
 * babel集成了 core-js 和 regenerator
 * core-js 里面有ES6等新语法特性的polyfill -> 不支持 generator
 */

//  for(var i = 0; i< 10;i++){
//    console.log(i)
//  }


// var i = 0
// for (; i < 10;) {
//   console.log(i);
//   i++
// }

for (i = 0; i < 20; i++) {
  console.log("==", i);
  if (i % 10 === 7 || i / 7 === 0) {
    break
  }
  console.log(i)
}