
import { LoginStatusContext } from '../../context';
import StButton from '../Button';

class Header extends React.Component {
  render() {
    return (
      <LoginStatusContext.Consumer>
        {
          ({ status, login }) => (
            <div className="header">
              <h1>Header</h1>
              <StButton>
                Header({
                  status ? '一登录' : '未登录'
                })
              </StButton>
              <button onClick={login}>登录、注销</button>
            </div>
          )
        }
      </LoginStatusContext.Consumer>
    )
  }
}
export default Header