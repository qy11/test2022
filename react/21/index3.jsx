/**
 * 
 */

const HttpGet = (props) => {
  const { url, loading, children } = props;
  const [data, setData] = React.useState([])
  React.useEffect(async () => {
    const res = await axios(url)
    console.log(res);
    if (res.data) {
      setTimeout(() => {
        setData(res.data)
      }, 1000)
    }
  }, [])

  return data.length ? children(data) : loading
}





class App extends React.Component {

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>姓名</th>
            <th>年级</th>
          </tr>
        </thead>
        <tbody>
          <HttpGet
            url="http://localhost:5002/getStudents"
            loading={
              <tr>
                <td colSpan={3}>加载中...</td>
              </tr>
            }
          >
            {
              (data) => (
                data.map(item =>
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.grade}</td>
                  </tr>
                )
              )
            }
          </HttpGet>
        </tbody>
      </table>
    )
  }
}
export default App