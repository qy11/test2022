/**
 * memo => 和shouldComponentUpdate相似  传入子组件的属性值未发生变化，即不会渲染
 * 
 * useMemo => 固定值 不希望子组件渲染  渲染期间执行
 * useCallback => 固定函数 
 * 
 * useCallback(fn, deps) 相当于 useMemo(() => fn, deps)
 */
  import React, { useState, memo, PureComponent, useCallback, useMemo } from 'react';

  const Foo = memo((props) => {
    console.log('Foo');
    return <ul>
      {props.count}
      {props.forList} {/**useMemo不用加(), useCallback需要加()执行 */}
    </ul>
  })
  class Bar extends PureComponent {
    render() {
      console.log('Bar');
      return <div>
        {this.props.range}
      </div>
    }
  }
  const App = () => {
    const [range, setRange] = useState({ min: 0, max: 1000 });
    const [count, setCount] = useState(0);
    // const forList = useCallback(() => {
    //   let list = []
    //   for (let i = 0; i < range.max; i++) {
    //     list.push(<li key={i}>{i + 1}</li>)
    //   }
    //   return list
    // }, [range])

    const forList = useMemo(() => {
      let list = []
      for (let i = 0; i < range.max; i++) {
        list.push(<li key={i}>{i + 1}</li>)
      }
      return list
    }, [range])

    const handleAdd = () => {
      setCount(count + 1)
    }
    return <div>
      <p>count:{count}</p>

      <button onClick={handleAdd}>count add</button>
      <button onClick={() => setRange({ ...range, min: range.min + 1 })}>range add</button>
      {/**修改useState的方法 */}
      <Bar range={range.max} />
      <Foo
        range={range.max}
        forList={forList}
      />
    </div>;
  };

  export default App;
