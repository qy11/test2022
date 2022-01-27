//
import Home from './pages/Home';
import { btnStyle } from './config/index';
import { BtnStyleContext, LoginStatusContext } from './context/index';



class App extends React.Component {
  state = {
    style: btnStyle.success,
    loginStatus: false
  }
  doClick = (e) => {
    console.log(e.target.textContent);
  }
  login = () => {
    this.setState({
      loginStatus: !this.state.loginStatus
    })
  }
  render() {
    return (
      <div>
        <BtnStyleContext.Provider
          value={{
            style: this.state.style,
            doClick: this.doClick
          }}
        >
          <LoginStatusContext.Provider
            value={{
              status: this.state.loginStatus,
              login: this.login
            }}
          >
            <Home />
          </LoginStatusContext.Provider>
        </BtnStyleContext.Provider>
      </div>
    )
  }
}
export default App