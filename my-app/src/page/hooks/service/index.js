import React, { Component } from 'react'

const Hoc = (WrapperComponent) => {
  return class extends Component {
    state = {
      info: []
    }
    componentDidMount() {
      ; (async () => {
        const res = await fetch('http://jsonplaceholder.typicode.com/users').then(res => res.json())
        this.setState({
          info: res
        })
      })();
    }
    render() {
      return (
        <WrapperComponent {...this.state} />
      )
    }
  }
}

export default Hoc