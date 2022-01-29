/**
import MyInput from './../19/input/MyInput';
 * 高阶组件 Ref
 */

class MyInput extends React.Component {

  render() {
    return (
      <input type="text" placeholder={props.placeholder} />
    )
  }
}

const InputHoc = (WrapperComponent) => {
  class Ipt extends React.Component {

    render() {
      //容器内组件获取ref 
      const { forwardRef, ...rest } = this.props
      return (
        //传递给参数组件
        <WrapperComponent ref={forwardRef} {...rest} />
      )
    }
  }
  //向子组件传递ref
  return forwardRef = (props, ref) => <Ipt {...props} forwardRef={ref} />
}

const MyInputHoc = InputHoc(MyInput)
class App extends React.Component {
  constructor(props) {
    super(props)
    this.myInputRef = React.createRef()
  }
  componentDidMount() {
    console.log(this.myInputRef);
  }

  render() {
    return <div>
      <MyInputHoc ref={this.myInputRef} placeholder='请输入...'/>
    </div>;
  }
}
export default App