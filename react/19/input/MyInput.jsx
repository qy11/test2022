//
const MyInput = (props) => {
  React.useEffect(() => {
    console.log('我是 MyInput');
  }, [props])
  return (
    <div>
      <p>总计：{props.b + props.c}</p>
      <input type="text"
        value={props.iptVal}
        onChange={props.handleIptVal}
      />
    </div>
  )
}
export default MyInput