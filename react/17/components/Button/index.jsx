
import { BtnStyleContext } from '../../context';


class Button extends React.Component {
  render() {
    return (
      <BtnStyleContext.Consumer>
        {
          ({ style, doClick }) => (
            <button
              style={style}
              onClick={doClick}
              {...this.props}
            />
          )
        }
      </BtnStyleContext.Consumer>
    )
  }
}
export default Button