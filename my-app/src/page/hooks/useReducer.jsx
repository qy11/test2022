/**
 * 统一的方式更改state(调度) => dispatch
 * 
 */
// import { useReducer } from 'react';
import { useState } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}
function useReducer(reducer, initial) {
  const [count, setCount] = useState(initial);
  const dispatch = (action) => {
    let newCount = reducer(count, action)
    console.log(initial, newCount);
    setCount(newCount)
  }
  return [count, dispatch]
}
function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </div>
  );
}
export default Counter