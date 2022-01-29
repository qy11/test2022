import { useEffect, useState } from 'react';


const useCount = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `you clicked ${count} times`
    console.log('title');
  })
  return [count, setCount]
}

const App = () => {
  const [visible, setVisible] = useState(true);
  const [count, setCount] = useCount()
  return (
    <>
      <p>
        count:{count}
      </p>
      <button onClick={() => setVisible(!visible)}>visible</button>
      <button onClick={() => setCount(count + 1)}>count</button>
    </>
  )
}
export default App