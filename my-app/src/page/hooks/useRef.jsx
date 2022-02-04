import React, { Component, createRef, useRef, forwardRef } from 'react';

// class Foo extends Component {
//   iptRef = createRef()

//   focus = () => {
//     this.iptRef.current.focus()
//   }
//   render() {
//     return (
//       <input type="text" ref={this.iptRef} />
//     )
//   }
// }

const Foo = forwardRef((props, ref) => {
  return (
    <input type="text" ref={ref} />
  )
})
// class AppUseRef extends Component {
//   iptRef = createRef()
//   handleOnClick = () => {
//     this.iptRef.current.focus()
//   }
//   render() {
//     return <div>
//       <Foo ref={this.iptRef} />
//       <button onClick={this.handleOnClick}>click</button>
//     </div>;
//   }
// }


const AppUseRef = () => {
  const iptRef = useRef()
  const handleOnClick = () => {
    iptRef.current.focus()
  }
  return (
    <div>
      <Foo ref={iptRef} />
      <button onClick={handleOnClick}>click</button>
    </div>
  )
}


export default AppUseRef