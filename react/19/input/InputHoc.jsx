//
const InputHoc = (WrapperComponent) => {
  class IptHocComponent extends React.Component {
    state = {
      iptVal: ''
    }
    handleIptVal = (e) => {
      this.setState({
        iptVal: e.target.value
      })
    }
    render() {
      //排除组件不需要的参数
      const { a, ...res } = this.props
      return <div>
        <p>{this.state.iptVal}</p>
        <WrapperComponent {...res}
          {...this.state}
          handleIptVal={this.handleIptVal}
        />
      </div>
    }
  }
  IptHocComponent.displayName = "HOC"
  return IptHocComponent
}
export default InputHoc