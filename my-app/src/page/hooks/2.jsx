/**
 * 惰性初始值 state
 * 
 * 副作用   <=>    纯函数
 *  -1.是否引入外部变量
 *  -相同输入一定会有相同的输出
 *  -useEffect
 * 
 * 修改DOM, 修改全局变量, ajax, 计时器, 存储相关
 * 副作用： 和外部交互的
 * 
 * componentDidMount 和 componentDidUpdate 之后才会有构建真实DOM的渲染
 * 
 * 真实DOM渲染完成以后才会渲染 useEffect() 异步的 里面是闭包 
 * 
 * 真实DOM渲染完成之前 useLayoutEffect()
 * 
 * useEffect的 清理函数 在 useEffect 之前执行
 *  
 * setCount(count + 1)  // count是闭包中count,之前
 * setCount(count => count + 1) //拿到最新的count
 */
import { useEffect, useState } from 'react';

const Hooks = () => {
  // 惰性初始值 state
  const [count, setCount] = useState(() => {
    // console.log(122222);
    return 0
  })
  let timer
  const timers = () => {
    timer = setInterval(() => {
      console.log('进入');
      // setCount(count + 1) // 不会渲染
      setCount(count => count + 1)
    }, 1000)
  }
  // 清理函数
  useEffect(() => {
    console.log('开始计时器');
    timers()
    return () => {
      console.log('clear');
      clearInterval(timer)
    }
    // }, [count])
  }, [])
  const handleClick = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <p>count:{count}</p>
      <button onClick={handleClick}>click</button>
    </div>
  )
}

const App = () => {
  const [visible, setVisible] = useState(true);
  return (
    <>

      {visible && <Hooks />}
      <button onClick={() => setVisible(!visible)}>visible</button>
    </>
  )
}
export default App