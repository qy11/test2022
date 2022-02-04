import React, { Component, useContext } from 'react';

const AppContext = React.createContext('树木')
const AppContextSub = React.createContext()

class Foo extends Component {
  render() {
    return <AppContext.Consumer>
      {(value) => (
        <AppContextSub.Consumer>
          {value2 => <div>{`${value}::${value2}`}</div>}
        </AppContextSub.Consumer>
      )}
    </AppContext.Consumer>
  }
}
class Bar extends Component {
  static contextType = AppContextSub
  render() {
    console.log(this, this.context);
    return <div>{this.context}</div>
  }
}

const Baz = () => {
  const val1 = useContext(AppContext)
  const val2 = useContext(AppContextSub)
  return (
    <div>
      {val1}::::==={val2}
    </div>
  )
}

class App extends Component {
  render() {
    return <div>
      <AppContext.Provider value={'树木'}>
        <AppContextSub.Provider value={'苗苗'}>
          <Foo />
        </AppContextSub.Provider>
      </AppContext.Provider>
      <Bar />
      <Baz />
    </div>;
  }

};
export default App