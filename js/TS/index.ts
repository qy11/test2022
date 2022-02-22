// import axios from "axios";
// const url = "https://jsonplaceholder.typicode.com/todos/1";
/**
 * 接口 interface
 *
 * 类型分类
 *  -元类型（primitive types） number boolean undefined void string symbol null
 *  -对象类型（object types）  functions arrays classes objects
 */
// interface Todo {
//   id: number;
//   title: string;
//   completed: boolean;
// }

// axios.get(url).then((res) => {
//   const todo = res.data as Todo;
//   const id = todo.id;
//   const title = todo.title;
//   const completed = todo.completed;
//   // const a = todo.a;
//   logTodo(id, title, completed);
// });

// function logTodo(id: number, title: string, completed: boolean) {
//   console.log(id, title, completed);
// }
// import { User } from "./components/Users";
// console.log(new User());

// class MinClass<T> {
//   public list: T[] = [];
//   add(num: T) {
//     this.list.push(num);
//   }
//   min(): T {
//     let minNum = this.list[0];
//     for (let i = 0; i < this.list.length; i++) {
//       if (minNum > this.list[i]) {
//         minNum = this.list[i];
//       }
//     }
//     return minNum;
//   }
// }
// const m = new MinClass();
// m.add(1);
// m.add(8);
// console.log(m.list);
// console.log(m.min());

// interface Lengthwise {
//   length: number;
// }

// function loggingIdentity2<T extends Lengthwise>(arg: T): T {
//   console.log(arg.length); // Now we know it has a .length property, so no more error
//   return arg;
// }

// console.log(loggingIdentity2({ length: 10, value: 3 }))

/**
 * keyof 修饰的键名
 * 地图
 *  16号出计划
 *  在线编辑
 *  平移
 *  旋转
 *  在线编辑
 * 
 * 报错提示
 *    上传地图时候提示，要详细点
 *    正常运行时，如有错误，也要显示
 * 
 */

/**
 * ts静态类型
 *
 * interface 对象
 * 数组 number[] string[] Array<number>
 *
 * 类型别名 type
 */
// interface Person {
//   name: string;
//   age: number;
//   sex: string;
// }
// type k1 = keyof Person;
// type k2 = keyof Person[];

// const isDone: boolean = true;

// console.log(isDone);

// const obj2: Object = { name: 1 };

// console.log(obj2.toString()); // [object Object]

// let f = null;
// let n: undefined = undefined;

// //推荐 联合类型
// let num: number | undefined = undefined;

// // 需联合类型的共有方法
// interface Todo {
//   readonly num: number; // 只读属性
// }

// let todo1: Todo = {
//   num: 1,
// };
// todo1.num = 2; // 不能修改

// let list: (string | number)[] = [1, 2, 3, "2"];

// let list3: number[] = [1, 4];

// let list4: Array<number> = [1, 9];

// interface Card {
//   suit: number;
// }
// interface Deck {
//   suits: string[];
//   cards: number[];
//   creatPicker(this: Deck): () => Card;
// }

// let deck123 = {
//   suits: ["a", "b"],
//   cards: Array(52),
//   creatPicker: function () {
//     return () => {
//       let p = 2;
//       return { suits: [...this.suits, p] };
//     };
//   },
// };
// deck123.creatPicker;
// let cardPicker = deck123.creatPicker();
// console.log(deck123.creatPicker()());
// console.log(cardPicker());
// let pickedCard = cardPicker();

// interface SearchFunc {
//   (source: string, subString: string): boolean;
// }

type SearchFunc = (source: string, subString: string) => boolean;

let mySearch: SearchFunc;

mySearch = function (source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
};
