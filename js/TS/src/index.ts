// let decLiteral: number = 6;
// let hexLiteral: number = 0xf00d;
// let binaryLiteral: number = 0b1010;
// let octalLiteral: number = 0o744;

// let obj: Object = {

// }

declare function create(o: object | null): void;

interface Person2 {
  readonly id: number;
  [propName: string]: any;
}

let p: Person2 = {
  id: 2,
  name: "tom",
};

interface List2 {
  [index: number]: number;
}

let list1: List2 = [1, 2, 3];

// // 类数组
// interface Args {
//   [index: number]: any;
//   length: number;
//   callee: Function;
// }

// function test() {
//   let args: Args = arguments;
// }
// test();

/**
 * 函数的注解方式
 *    -函数声明
 *    -函数表达式
 */

let test: (a: number, b: number) => number = function (a, b) {
  return a + b;
};

/**
 *  可选参数一定要放到后面
 *  默认参数不能加?
 *  剩余参数
 */
function buildName(a: string, b?: string) {}
function buildName2(a: string, b: string = "zhangsan") {}
function buildName3(a: string, b: string = "zhangsan", ...res: string[]) {}

/**
 * 函数解构
 */
function test3(
  { first, second }: { first: number; second: number } = { first: 1, second: 2 }
) {}

function test4({ first = 2 }: { first: number }) {}

//this 指向
interface Card {
  suit: number;
}
interface Deck {
  suits: string[];
  cards: number[];
  creatPicker(this: Deck): () => Card;
}
let deck = {
  suits: ["a", "b"],
  cards: Array(52),
  creatPicker: function () {
    return () => {
      let p = 2;
      return { suits: this.suits[p] };
    };
  },
};

/**
 * 重载
 *  -表意更清楚
 */
// function reverse(x: string): string;
// function reverse(x: number): number;
// function reverse(x: string | number) {
//   if (typeof x === "string") {
//     return x.split("").reverse().join("");
//   }
//   if (typeof x === "number") {
//     return x.toString().split("").reverse().join("");
//   }
// }


/**
 * super指向父类的constructor构造器
 * 
 */
class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name); //constructor Animal(name: string): Animal
  }
  move(distanceInMeters = 5) {
    console.log("Slithering...");
    super.move(distanceInMeters);
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 45) {
    console.log("Galloping...");
    super.move(distanceInMeters);
  }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);
