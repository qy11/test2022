
import { LoginStatusContext } from '../../context';
import StButton from '../Button';

class Main extends React.Component {
  render() {
    return (
      <LoginStatusContext.Consumer>
        {
          ({ status, login }) => (
            <div className="main">
              <h1>Main</h1>
              <StButton>
                Main({
                  status ? '一登录' : '未登录'
                })
              </StButton>
            </div>
          )
        }
      </LoginStatusContext.Consumer>
    )
  }
}
export default Main