//


function listHoc(WrapperComponent, fetchData) {
  return class extends React.Component {
    state = {
      listData: []
    }
    async componentDidMount() {
      const res = await fetchData(this.props.filed)
      this.setState({
        listData: res.data,
      })
    }
    removeStudent = (id) => {
      this.setState({
        listData: this.state.listData.filter(item => item.id !== id)
      })

    }
    addLike = (id) => {
      this.setState({
        listData: this.state.listData.map(item => {
          if (item.id === id) {
            item.like++
          }
          return item
        })
      })
    }

    render() {
      return (
        <>
          {
            this.props.filed === 'student' ?
              <WrapperComponent data={this.state.listData} removeStudent={this.removeStudent} /> :
              <WrapperComponent data={this.state.listData} addLike={this.addLike} />
          }

        </>
      )
    }
  }


}
export default listHoc