/**
 * context 
 * 
 * Provider  供应方
 * Consumer  消费方
 */
export const ThemeContext = React.createContext('block')

class Header extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer >
        {
          (theme) => {
            console.log(theme);
            return <h1 className={theme}>123</h1>
          }
        }
      </ThemeContext.Consumer>
    )
  }
}


class App extends React.Component {
  state = {
    theme: 'block'
  }
  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <Main />
      </ThemeContext.Provider>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)