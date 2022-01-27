/**
 * context 给整个组件树共享全局的数据
 *  -最适合的场景：杂乱无章的组件都需要同一些数据
 *  -单纯为了不层层传递，是不合适的
 * 弱点：
 *  -弱化及污染组件纯度，导致组件复用性降低
 */
const CityContext = React.createContext({
  name: 'hangzhou',
  text: '杭州'
})

class App extends React.Component {
  state = {
    cityInfo: {
      name: 'hangzhou',
      text: '杭州'
    }
  }
  changeCity = (cityInfo) => {
    this.setState({
      cityInfo
    })
  }
  render() {
    return (
      <div>
        <CityContext.Provider value={this.state.cityInfo}>
          <Header changeCity={this.changeCity} />
          <span>{this.state.cityInfo.text}</span>

        </CityContext.Provider>
      </div>
    )
  }
}

const Header = (props) => {

  return (
    <Selector {...props} />
  )
}

const cityArr = [
  {
    name: '',
    text: '请选择'
  },
  {
    name: 'beijing',
    text: '北京'
  },
  {
    name: 'chengdu',
    text: '成都'
  },
  {
    name: 'hangzhou',
    text: '杭州'
  },
  {
    name: 'shenzhen',
    text: '深圳'
  },
]

class Selector extends React.Component {
  /**
   * 将上下文的类型指定为CityContext
   * this.context => cityInfo
   * 向上找最近的CityContext.Provider, 并且取值
   */
  static contextType = CityContext

  render() {
    // console.log(this.context);
    return (
      <select
        value={this.context.name}
        onChange={
          (e) => {
            console.log(e.target, e.target.selectedIndex);
            this.props.changeCity({
              name: e.target.value,
              text: e.target[e.target.selectedIndex].text
            })
          }
        }
      >
        {cityArr.map((item) => <option value={item.name} key={item.name}>{item.text}</option>)}
      </select>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)