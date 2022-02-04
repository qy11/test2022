/**
 *
 */


// const arr = [1, 2, 3, 4, 5]
// const newArr = arr.fill('a', 2, 4)
// console.log(arr, newArr) // [1, 2, 'a', 'a', 5]
// console.log(arr === newArr) // 是原数组的引用

// const newArr = arr.fill('a') // 全是 a  ['a', 'a', 'a', 'a', 'a']

// const newArr = arr.fill() //全是 undefined

// const newArr = arr.fill('a', 'x', 'y') // [1, 2, 3, 4, 5]

// console.log(-4 >> 0) // 位运算

// Array.prototype.myFill = function () {
//   var value = arguments[0] || undefined,
//     start = arguments[1] >> 0,
//     end = arguments[2];
//   if (this === null) {
//     throw new TypeError('This is null not defined')
//   }
//   var obj = Object(this),
//     len = obj.length >>> 0;
//   start = start < 0 ? Math.max(len + start) : Math.min(start, len);
//   end = end === undefined ? len : end >> 0;
//   end = end < 0 ? Math.max(len + end, 0) : Math.min(end, len);
//   while (start < end) {
//     obj[start] = value;
//     start++
//   }
//   return obj
// }

// const newArr = arr.myFill('a', 1, 3)
// console.log(undefined >> 0)

function generator() {
  const ctx = {
    current: 0,
    next: 0,
    done: false,
    finish() {
      this.done = true
    }
  }

  return {
    next() {
      return {
        value: generator$,
        done: ctx.done
      }
    }
  }
}

function generator$(ctx) {
  while (true) {
    switch (ctx.current = ctx.next) {
      case 0:
        ctx.next = 1
        return '姓名'
      case 1:
        ctx.next = 2
        return '年龄'
      case 2:
        ctx.next = 3
        return '爱好'
      case 3:
        ctx.finish()
        return '我爱Javascript'
    }
  }
}