/**
 * hooks 竞态
 */
import { useEffect, useState } from 'react';
const API = {
  async queryEmploy(id) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(id);
        resolve({ id, current: `current,${id}` })
      }, 1000 / (5 - id))
    })
  }
}

const Department = props => {
  const { id } = props;
  const [employees, setEmployees] = useState({})

  useEffect(() => {
    let didCancel = true;
    (async function fetchDate() {
      // if (didCancel) {
      let employees = await API.queryEmploy(id)
      if (didCancel) {
        console.log('res', didCancel, employees);
        setEmployees(employees)
      }
    })()

    return () => {
      didCancel = false
      console.log('clear', didCancel);
    }
  }, [id])
  return (
    <div>
      <p>
        {employees.current}
      </p>
    </div>
  )
}

const App = () => {
  const [id, setId] = useState(0)

  return <div>
    <p>id{id}</p>
    <button onClick={() => setId(id + 1)}>click</button>
    <Department id={id} />
  </div>;
};

export default App;