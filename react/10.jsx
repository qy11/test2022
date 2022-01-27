/**
import { ReactDOM } from 'react-dom';
 * 非受控组件： 表单数据不受控与state, 使用React Ref从DOM节点获取表单数据
 */
class App extends React.Component {
  constructor(props) {
    super(props)
    this.usernameRef = React.createRef()
    this.passwordRef = React.createRef()
    this.genderRef = React.createRef()
  }

  handleSubmitClick = (e) => {
    e.preventDefault()
    console.log(this.usernameRef);
  }

  handleResetClick = (e) => {
    e.preventDefault()
  }
  render() {
    return (
      <form onSubmit={this.handleSubmitClick}>
        <p>
          用户名：
          <input type="text" ref={this.usernameRef} />
        </p>
        <p>
          密码：
          <input type="password" ref={this.passwordRef} />
        </p>
        <p>
          <input type="file" ref={this.fileRef} />
        </p>
        <select name="" id="" defaultValue='male' ref={this.genderRef}>
          <option value="male">男</option>
          <option value="female">女</option>
        </select>
        <p>
          {/**<button onClick={this.handleSubmitClick}>登录</button> */}
          <button type="submit">登录</button>
          <button onClick={this.handleResetClick}>重置</button>
        </p>
      </form>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)