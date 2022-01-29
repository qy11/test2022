/**
 * hooks 
 *  -相同的钩子useState多个，不同的一一对应的结果
 *    -记忆单元格(状态数组)
 *    -指针对应的下标
 * 
 * const [count,setCount] = useState(0)
 *  -第二个参数(setCount)引用是一致的；
 *  -当count一致的时候不会重新渲染，通过 Object.is 方式比较
 *  -函数的更新 （上一次的state 和 最新的state）和 不同返回值的更新
 * 闭包的方式来处理
 */