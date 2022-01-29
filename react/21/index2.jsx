/**
 * props.children
 */

const Repeat = (props) => {

  let jsxArr = []
  for (let i = 0; i < props.num; i++) {
    jsxArr.push(props.children(i))
  }

  return jsxArr
  /**
   * [
   *  This is item 1
   *  This is item 2
   * ]
   */
}

class App extends React.Component {

  render() {
    return (
      <Repeat num={10}>
        {
          (index) => <p key={index}>This is item {index + 1}</p>
        }
      </Repeat>
    )
  }
}
export default App