/**
 * 只希望暴露一个方法
 */
import React, { useRef, forwardRef, Component } from 'react';


const useImperativeHandle = (ref, cd) => {
  ref.current = cd()
}

const FancyIpt = forwardRef((props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));
  return <input type="text" ref={inputRef} />
})

// const AppUseImperative = () => {
//   const appRef = useRef()
//   const handleClick = () => {
//     console.log(appRef);
//     appRef.current.focus()
//     appRef.current.parentNode.removeChild(appRef.current) // 可以删除子组件的元素
//   }
//   return <div>
//     <FancyIpt ref={appRef} />
//     <button onClick={handleClick}>click</button>
//   </div>;
// };

// class AppUseImperative extends Component {
//   appRef
//   handleClick = () => {
//     console.log(this.appRef);
//   }
//   render() {
//     return (
//       <div>
//         <input
//           type='text'
//           ref={dom => { this.appRef = dom }}
//         />
//         <button onClick={this.handleClick}>click</button>
//       </div>
//     );
//   }
// };


const AppUseImperative = () => {
  let appRef
  const handleClick = () => {
    console.log(appRef);
  }
  return <div>
    <input ref={dom => { appRef = dom }} />
    <button onClick={handleClick}>click</button>
  </div>;
};


export default AppUseImperative;

