/**
 * 将子组件的节点ref暴露给父组件
 * 
 * Refs转发
 *  -React.forwardRef()
 *  -通过forwardRef向input转发ref属性
 *  -ref参数只能由forwardRef定义的组件内可以接收
 */

// class MyInput extends React.Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     return <div>
//       <input type="text" />
//     </div>;
//   }
// }

const MyInput = React.forwardRef((props, ref) => (
  <input type="text" placeholder={props.placeholder} ref={ref} />
))

class App extends React.Component {
  constructor(props) {
    super(props)
    this.myInputRef = React.createRef()
  }
  componentDidMount() {
    console.log(this.myInputRef);
  }
  handleBtn = () => {
    const oIpt = this.myInputRef.current
    oIpt.value=''
    oIpt.focus()
  }
  render() {
    return <div>
      <MyInput ref={this.myInputRef} placeholder={'请输入'} />
      <button onClick={this.handleBtn}>click</button>
    </div>;
  }
}
export default App