/**
 * 组件
 *  视图的片段
 *  包含：视图标记、事件、数据、逻辑、外部的配置
 * 
 * 组件一般是内部管理数据的集合（state）
 * 外部传入配置集合（props）
 * 
 * 函数必须bind
 *  -this指向元素本身button,用bind将this指向为实例
 * 
 * 属性props / 数据 状态 state 区别
 *  1.state => 数据池
 *      组件内部可读可写
 *  2.props => 属性池 外部调用组件时传入的属性集合
 *      组件内部可读不可写
 * 
 * 函数组件一定要是一个纯函数   1相同的输入得到相同的输出.2不可修改入参
 * 纯函数能保证绝对的复用性
 */
class Test extends React.Component {
  constructor(props) {
    super(props)
    // 内部数据
    this.state = {
      title: 'This is a class Component'
    }
  }

  // 事件处理函数
  handleBtnClick = () => { //
    // 逻辑
    this.setState({
      title: 'This is a My Component'
    })
  }
  render() {
    // 视图标记
    return (
      <div>
        <h1>{this.state.title}</h1>
        {/**事件 */}
        <button onClick={this.handleBtnClick.bind(this)}>click</button>
      </div>
    )
  }
}

ReactDOM.render(
  <Test />,
  document.getElementById('app')
)