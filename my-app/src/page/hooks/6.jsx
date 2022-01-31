import useInfo from './service/index2';

const useList = (props) => {
  return <div>
    <ul dangerouslySetInnerHTML={{ __html: props.info.map(item => props.itemTpl(item)) }}>
    </ul>
  </div>;
}


const App = () => {
  const info = useInfo()
  const itemTpl = (item) => {
    return Object.entries(item).reduce((prev, [key, value]) => {
      return typeof (value) === 'object' ?
        prev += `<ul><li>${key}:${itemTpl(value)}</li></ul>` :
        prev += `<li>${key}:${value}</li>`
    }, '')
  }

  return useList({ info, itemTpl })
};

export default App;
