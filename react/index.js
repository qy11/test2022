/**
 * React - 构建用户页面的JavaScript库
 * 
 * React主管意愿
 *  -1. 仅仅负责View层渲染
 *  -2. 是一个视图渲染的工具库，不做框架的事情
 * 
 * React -> React API -> 处理视图的API集合
 * ReactDOM -> 从render -> 虚拟DOM -> 真实DOM
 * 
 * React组件
 *  -1.继承React.Component
 *  -2.render函数返回一个视图
 * 
 * npx —— 它是 npm 5.2+ 附带的 package 运行工具。
 * create-react-app 内部的工程化： babel/webpack
 */

class MyButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      openStatus: false
    }
  }
  render() {

    const oP = React.createElement(
      'p',
      {
        className: 'text',
        key: 1
      },
      this.state.openStatus ? "打开状态" : "关闭状态"
    )

    const oBtn = React.createElement(
      'button',
      {
        key: 2,
        onClick: () => this.setState({
          openStatus: !this.state.openStatus
        })
      },
      this.state.openStatus ? "关闭" : "打开"
    )

    const wrapper = React.createElement(
      'div',
      {
        className: 'wrapper',
      },
      [oP, oBtn]
    )

    return wrapper
  }
}


ReactDOM.render(React.createElement(MyButton), document.getElementById('app'))

// var span = React.createElement('span', {
//   className: 'text',
//   key: 1
// }, 'This is 路口')

// ReactDOM.render(
//   React.createElement('div', {
//     'data-tag': 'div'
//   },
//     [span]
//   ),
//   document.getElementById('app')
// )