/**
 * state -> React核心 -> 状态 -> 数据池
 * 
 * this.setState((state, props) => {
      //上一个state
      //此次更新时被使用的props
    })
 * 
 *  setState操作合并的原理 -> 浅合并 完全替换state 还是原来的引用
 *
 *  由上而下，从父到子 传递的数据的方式为单向数据流 
 *  vue和react都是单向数据流
 *  vue多了双向数据绑定 v-modal 视图驱动数据
 * 
 *  state的安全影响范围 当前组件UI和内部UI 
 */

class Time extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dateTime: new Date().toString()
    }
  }
  componentDidMount() {
    //组件已经被渲染到DOM中，以后运行
    //组件已经被挂载到真实的DOM中后，运行的函数
    this.t = setInterval(() => {
      this.setState({
        dateTime: new Date().toString()
      })
    }, 1000);


  }
  componentWillUnmount() {
    //组件即将被卸载时运行
    clearInterval(this.t)
    this.t = null
    console.log("OVER");
  }
  render() {
    return (
      <div>
        {this.state.dateTime}
      </div>
    )
  }
}
ReactDOM.render(
  <Time />,
  document.getElementById('app')
)
setTimeout(() => {
  ReactDOM.unmountComponentAtNode(
    document.getElementById('app')
  )
}, 5000)
