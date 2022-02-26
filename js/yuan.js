/**
 * Function 既是构造函数，又是实例
 * 原型链继承
 * 借用构造函数继承
 * 组合继承
 * 寄生组合继承
 * 拷贝继承
 */

// function Foo() {

// }

// const f1 = new Foo()

// console.log(f1.__proto__ === Foo.prototype);
// console.log(Object.__proto__ === Function.prototype);
// console.log(Function.__proto__ === Function.prototype);

function Super() {
  this.value
}