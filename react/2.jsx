/**
 * JSX
 *   -1.一种标签语法，JS进行的语法扩展
 *   -2.不是字符串、不是HTML标签
 *   -3.描述UI呈现与交互的直观表现形式
 *   -4.生成React元素
 *   -5.遵循JS的命名规范，一般使用camelCase小驼峰 
 * 
 * 为什么不把UI视图和逻辑分开
 *    -1.渲染和UI标记有逻辑耦合
 *    -2.也可实现关注点分离
 * 
 * {  }  // 插值表达式     
 *    表达式：一切有效的（符合JS编程逻辑的）
 *    JSX被编译以后 -> react元素 -> 普通的对象
 * 
 * createElement与JSX对比 
 * 
 * render之前
 *  -所有的JSX都会转换为字符串
 *  -所有输入内容会转义   XSS攻击-很难了
 */
const rEl = <h1 className="title">This is my first JSX</h1>

// const rEl = React.createElement('h1', {
//   className: "title"
// }, "This is my first JSX")

console.log(rEl); // Symbol 唯一的值

ReactDOM.render(
  rEl,
  document.getElementById('app')
)