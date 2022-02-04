import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';

const AppUseLayoutEffect = () => {
  const divRef = useRef()
  const [, setObj] = useState({});

  // useEffect(() => {
  //   const a = divRef.current.style
  //   setTimeout(() => {
  //     console.log('all');
  //     a.transform = 'translate(200px)'
  //     a.translate = 'all 1s'
  //   }, 3000)

  //   return () => {
  //     console.log('clear');
  //     a.transform = 'translate(0)';
  //     a.translate = 'all 1s'
  //   }
  // })

  useLayoutEffect(() => {
    const a = divRef.current.style
    a.transform = 'translate(200px)'
    a.translate = 'all 1s'
  })


  const styleObj = {
    width: '100px',
    height: '100px',
    backgroundColor: 'orange'
  }

  return <div>
    <div style={styleObj} ref={divRef}>
    </div>
    <button onClick={() => { setObj({}) }}>click</button>
  </div>;
};

export default AppUseLayoutEffect;
