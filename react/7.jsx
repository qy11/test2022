/**
 * 条件渲染
 */
class App extends React.Component {
  state = {
    num: 0,
    tipShow: false
  }
  render() {
    const { tipShow } = this.state
    if (!tipShow) {
      // render函数返回null,不会进行任何渲染
      return null
    }
    return (
      <div>
        {
          /**
           * 判断表达式一定是bool的false、null、undefined的时候才不会显示
           * 0 NaN 会直接显示
           */
          this.state.num.toString() && <p>会员等级{this.state.num}</p>
        }
      </div>
    )
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('app')
)