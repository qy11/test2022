import React, { useState, memo, useCallback, useMemo } from 'react';

export const AppCallback = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  const increment = () => setCount(count + 1)
  const changeName = useCallback(e => setName(e.target.value), [])
  const info = useMemo(() => ({ name }), [name])   // 包一层
  return <div>
    <button onClick={increment}>点击次数：{count}</button>
    <p>
      name:{name}
    </p>
    <ChildComp onClick={changeName} info={info} />
  </div>;
};
export default AppCallback


let ChildComp = function (props) {
  console.log('render child-comp ...')
  return <div>Child Comp ...{props.info.name}
    <input type="text" onChange={props.onClick} />
  </div>
}

ChildComp = memo(ChildComp)