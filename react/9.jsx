/**
 * 受控组件
 *  -state是表单的唯一数据源
 *  -onChange操作控制表单并操作state 
 */
class App extends React.Component {
  state = {
    username: '',
    password: '',
    gender: 'male'
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    const { username, password, gender } = this.state
    return (
      <div>
        <form>
          <p>
            <label htmlFor="用户名"></label>
            <input type="text" name='username' onChange={this.handleChange} value={username} />
          </p>
          <p>
            <label htmlFor="密码"></label>
            <input type="password" name='password' onChange={this.handleChange} value={password} />
          </p>
          <p>
            <select name="gender" onChange={this.handleChange} value={gender} >
              <option value="male">男</option>
              <option value="female">女</option>
            </select>
          </p>
        </form>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)