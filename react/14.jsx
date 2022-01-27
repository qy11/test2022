/**
 * 错误边界 react16 增加
 *  -getDerivedStateFromError
 *  -防止某个组件UI渲染错误导致整个应用崩溃
 *  -子组件发生错误，有备用的渲染UI
 *  -错误边界 -> 组件 -> class 
 *  -渲染备用UI 
 *  -渲染时调用
 * 
 * componentDidCatch(error, info)  -> 原型上的方法 继承而来的
 *  -组件抛出异常后调用
 * 
 * 冒泡机制
 */

class ErrorBoundary extends React.Component {
  state = {
    hasError: false
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }
  componentDidCatch(error, info) {
    console.log(error, info);
  }
  render() {
    if (this.state.hasError) {
      return <h1>This is Error UI</h1>
    }
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

class Text extends React.Component {
  render() {
    return (
      <div>
        {state.name}
      </div>
    )
  }
}

class Main extends React.Component {
  render() {
    return (
      <div>
        Main
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <Main />
        <Text />
      </ErrorBoundary>
    )
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('app')
)