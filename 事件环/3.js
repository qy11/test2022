/**
 * 
 */
const oBtn = document.getElementById('btn')

// oBtn.addEventListener('click', function () {
//   Promise.resolve('m1').then((res) => {
//     console.log(res);
//   })
//   console.log(1);
// })

// oBtn.addEventListener('click', function () {
//   console.log(2);
//   Promise.resolve('m2').then((res) => {
//     console.log(res);
//   })
// })
// oBtn.click()
/**1 2 m1 m2 */

/**上下两个相当于相等 */

// const handle1 = function () {
//   Promise.resolve('m1').then((res) => {
//     console.log(res);
//   })
//   console.log(1);
// }

// const handle2 = function () {
//   console.log(2);
//   Promise.resolve('m2').then((res) => {
//     console.log(res);
//   })
// }
// handle1()
// handle2()



/**
 * 用户触发事件 和 直接调用是不一样的
 * 
 * 用户触发
 *  -调用了两次事件循环
 */

oBtn.addEventListener('click', function () {
  Promise.resolve('m1').then((res) => {
    console.log(res);
  })
  setTimeout(() => {
    console.log(1);
  });
})

oBtn.addEventListener('click', function () {
  setTimeout(() => {
    console.log(2);
  });
  Promise.resolve('m2').then((res) => {
    console.log(res);
  })
})
// oBtn.click()