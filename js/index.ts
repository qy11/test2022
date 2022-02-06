/**
 * "strictPropertyInitialization": false,
 */

// class Animal {
//   name: string;
//   constructor(theName: string) {
//     this.name = theName;
//   }
//   move(distanceInMeters: number = 0) {
//     console.log(`${this.name} moved ${distanceInMeters}m.`);
//   }
// }

// class Snake extends Animal {
//   constructor(name: string) {
//     super(name); //super指向父类的constructor构造器 constructor Animal(name: string): Animal
//   }
//   move(distanceInMeters = 5) {
//     console.log("Slithering...");
//     super.move(distanceInMeters); //调用父类的move()  (method) Animal.move(distanceInMeters?: number): void
//   }
// }
/**
 * readonly
 */
// class Octopus {
//   readonly name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// const o = new Octopus("Tom");
// o.name = "Jack"; //无法分配到 "name" ，因为它是只读属性。

/**
 * getter 取值函数 obj.a
 * setter 存值函数 obj.a = '123'
 */
// let passcode = "secret passcode";

// class Employee {
//   private _fullName: string;

//   get fullName(): string {
//     return this._fullName;
//   }

//   set fullName(newName: string) {
//     if (passcode && passcode == "secret passcode") {
//       this._fullName = newName;
//     } else {
//       console.log("Error: Unauthorized update of employee!");
//     }
//   }
// }

// let employee = new Employee();
// employee.fullName = "Bob Smith";
// if (employee.fullName) {
//   alert(employee.fullName);
// }

/**
 * 抽象类
 *  -抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。
 *  -父类中抽象的方法，在子类中一定要实现
 *  -
 */

// abstract class Animal {
//   abstract makeSound(): void;
//   move(): void {
//     console.log("roaming the earch...");
//   }
// }
// class Snake extends Animal {
//   makeSound() {}
// }
// const snake = new Snake();
// snake.makeSound()

/**
 * 接口
 *  -函数类型
 */
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
};

/**
 * 索引签名
 *
 */

interface StringArray {
  [index: number]: string;
}

// let myArray: StringArray;
// myArray = ["Bob", "Fred"];

// let myStr: string = myArray[0];

class Animal {
  name: string;
}
class Dog extends Animal {
  breed: string;
}

// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
// interface NotOkay {
//   [x: number]: Animal;
//   [x: string]: Dog;
// }

// interface NumberDictionary {
//   [index: string]: number;
//   length: number;    // 可以，length是number类型
//   name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
// }

// interface ReadonlyStringArray {
//   readonly [index: number]: string;
// }
// let myArray: ReadonlyStringArray = ["Alice", "Bob"];
// myArray[2] = "Mallory"; // error!

/**
 * 类类型
 *  -implements
 */
//  interface ClockInterface {
//   currentTime: Date;
//   setTime(d: Date);
// }

// class Clock implements ClockInterface {
//   currentTime: Date;
//   setTime(d: Date) {
//       this.currentTime = d;
//   }
//   constructor(h: number, m: number) { }
// }

/**
 * 混合类型
 *  -一个对象可以同时做为函数和对象使用，并带有额外的属性。
 */
// interface Counter {
//   (start: number): string;
//   interval: number;
//   reset(): void;
// }

// function getCounter(): Counter {
//   let counter = <Counter>function (start: number) {};
//   counter.interval = 123;
//   counter.reset = function () {};
//   return counter;
// }

// let c = getCounter();
// c(10);
// c.reset();
// c.interval = 5.0;

/**
 * 接口继承类
 */

/**
 * 泛型
 * T 泛型变量
 */
// function identity(arg: number): number {
//   return arg;
// }

// function identity2<T>(arg: T): T {
//   return arg;
// }
// identity2<string>("abc");
// identity2("abc");
// // 数组
// let arr: number[] = [1, 2];
// let arr2: Array<number> = [1, 2];

/**
 *
 *  参数的length报错问题
 * number[]
 * string[]
 */
// function identity3<T>(arg: Array<T>): Array<T> {
//   console.log(arg.length);
//   return arg;
// }

/**
 * 泛型类型
 */

// function identity<T>(arg: T): T {
//   return arg;
// }

// let myIdentity: <T>(arg: T) => T = identity;

/**泛型类 */
// class GenericNumber<T> {
//   zeroValue: T;
//   add: (x: T, y: T) => T;
// }

// let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function (x, y) {
//   return x + y;
// };

// class MinClass<T> {
//   public list: T[] = [];
//   add(num: T) {
//     this.list.push(num);
//   }
//   min(): T {
//     let minNum = this.list[0];
//     for (let i = 0; i < this.list.length; i++) {
//       if (minNum < this.list[i]) {
//         minNum = this.list[i];
//       }
//     }
//     return minNum;
//   }
// }

/**
 * 泛型约束
 */
// function loggingIdentity<T>(arg: T[]): T[] {
//   console.log(arg.length); // Error: T doesn't have .length
//   return arg;
// }

// function loggingIdentity<T>(arg: T): T {
//   console.log(arg.length);  // Error: T doesn't have .length
//   return arg;
// }

// interface Lengthwise {
//   length: number;
// }
type Lengthwise = string;

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length); // Now we know it has a .length property, so no more error
  return arg;
}

/**
 * 多重泛型约束
 *  -交叉类型 &
 */
// function extend<T, U>(first: T, second: U): T & U {
//   let result = <T & U>{};
//   for (let id in first) {
//     (<any>result)[id] = (<any>first)[id];
//   }
//   for (let id in second) {
//     if (!result.hasOwnProperty(id)) {
//       (<any>result)[id] = (<any>second)[id];
//     }
//   }
//   return result;
// }

// class Person {
//   constructor(public name: string) {}
// }
// interface Loggable {
//   log(): void;
// }
// class ConsoleLogger implements Loggable {
//   log() {
//     // ...
//   }
// }
// var jim = extend(new Person("Jim"), new ConsoleLogger());
// var n = jim.name;
// jim.log();

/** */
// interface Sentence {
//   content: string;
//   title: string;
// }
// interface Music {
//   url: string;
// }
// class Test<T extends Sentence & Music> {
//   arg: T;
//   constructor(args: T) {
//     this.arg = args;
//   }
//   info() {
//     return {
//       content: this.arg.content,
//       url: this.arg.url,
//       title: this.arg.title,
//     };
//   }
// }

/*** */
declare function test3(...args: [number, string, boolean]): void;
let list: [number, ...string[]] = [1, "2", "3"];
