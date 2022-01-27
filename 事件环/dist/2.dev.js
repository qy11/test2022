/**
 * async
 *  -语法糖，基于generator
 *  -默认返回一个promise实例
 *  -await必需在 async 中  -> yield  -> test().then(()=> {})
 */
// let res = function () {
//   console.log(1);
//   return new Promise((resolve, reject) => {
//     console.log(2);
//     resolve(4)
//   })
// }
// new Promise(async (resolve, reject) => {
//   console.log(3);
//   let test = await res() // test 相当于 .then之后的代码。 res() 相当于new Promise后then前
//   console.log(test);
// })
// console.log(5);
// new Promise((resolve, reject) => {
//   console.log(6);
// })
// console.log(7);

/**
 * 3 1 2 5 6 7 4
 */
// let res = function () {
//   console.log(1);
//   return new Promise((resolve, reject) => {
//     console.log(2);
//     resolve(4)
//   })
// }
// new Promise(async (resolve, reject) => {
//   setTimeout(() => {
//     console.log(3);
//   })
//   let test = await res() // test 相当于 .then之后的代码。 res() 相当于new Promise后then前
//   console.log(test);
// })
// setTimeout(() => {
//   console.log(5);
// })
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log(6);
//   });
// })
// console.log(7);

/**
 * 1 2 7 4 3 5 6
 */
"use strict";