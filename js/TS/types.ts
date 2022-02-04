/**
 *
 */
// const today = new Date();
// today.toLocaleString();

/**
 * 类型注解
 *  -TS也可以自己进行类型推断
 *  -手动添加
 *    -当 变量声明 和 变量初始化 在同一行的时候，类型推断 系统才会起作用
 *    -否则为any类型（①需手动添加类型注解）
 *  -②当一个函数返回any类型，但我们想要明确类型 JSON.parse()
 *  -③联合类型 let b: boolean | number = false
 * 
 */
const score: number = 1;
console.log(score);

// let a: number;
// a = 0;
// a = "ggg";

let today: Date = new Date();

/**
 * 对象类型
 */
// 数组
let balls: string[] = ["basketball", "football"];
let numbers: number[] = [1, -5, 0];

// 类
class Car {}
let car: Car = new Car();

//对象字面量
let person: { name: string; age: number } = {
  name: "张三",
  age: 23,
};

//函数 -参数  -返回值
const logNumber: (num: number) => void = (num) => {};
