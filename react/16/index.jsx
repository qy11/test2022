const App = () => {

  const [arr, setArr] = React.useState([1, 2, 3, 4, 5])

  const handleRandom = () => {
    const newArr = arr.sort(() => Math.random() - 0.5)
    console.log(newArr);
  }
  return <div>
    <button onClick={handleRandom}>洗牌</button>
  </div>;
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
)