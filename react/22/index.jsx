
const AppUseRef = () => {
  const iptRef = React.useRef()
  // const iptRef = React.createRef()
  console.log(iptRef);
  const handleOnClick = () => {
    iptRef.current.focus()
  }
  React.useEffect(() => {
    console.log(iptRef);
  })
  return (
    <div>
      <Foo ref={iptRef} />
      <button onClick={handleOnClick}>click</button>
    </div>
  )
}


const Foo = React.forwardRef((props, ref) => {
  return (
    <input type="text" ref={ref} />
  )
})

export default AppUseRef