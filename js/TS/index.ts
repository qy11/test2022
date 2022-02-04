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
import { User } from "./components/Users";
console.log(new User());
