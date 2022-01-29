import { useState } from "react"

/**
 * hooks 
 *  -相同的钩子useState多个，不同的一一对应的结果
 *    -记忆单元格(状态数组)
 *    -指针对应的下标
 * 
 * const [count,setCount] = useState(0)
 *  -第二个参数(setCount)引用是一致的；
 *  -当count一致的时候不会重新渲染，通过 Object.is 方式比较  
 *  -{} 强制刷新   class中this.forceUpdate()强制刷新，不会走shouldComponentUpdate
 *  -函数的更新 （上一次的state 和 最新的state）和 不同返回值的更新
 *  -渲染时，多次setCount会合并为一次 
 *  -useState 不会合并对象 useState({num:1})   setNum({num1: 2}), 会替换掉
 * 闭包的方式来处理
 */
const AnyWay = () => {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(c => c + 1)
    setCount(c => {
      console.log(count);
      return c + 1
    })
  }
  return (
    <div>
      <p>
        count:{count}
      </p>
      <button onClick={handleClick}>
        click
      </button>
    </div>
  )
}

export default AnyWay