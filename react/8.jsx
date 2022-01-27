/**
 * 列表渲染
 * 
 * JSX -> map
 * 
 * key 必需
 * 列表中每一个子元素都必需唯一的key属性值
 * 
 * key是React查看元素是否改变的唯一标识 
 *    -必需在兄弟节点中唯一，确定的（一个列表）
 * 
 * 不建议index作为key值（禁止）静态不可操作，可使用
 *  -建立在列表顺序改变、元素增删的情况下
 * 
 * 列表增删或者顺序改变，index的对应项就会改变，
 *  -key对应项还是之前列表的的对应值（未改变）
 *    从而导致状态（arr）混乱，查找元素性能会变差
 * 
 * 1.用数据的ID
 * 2.使用动态生成一个静态ID  nanoid
 * 
 * key不会显示传递给子组件
 *  -防止开发者对key值进行操作
 * 
 * 多层map嵌套，将每一层提出来为单独组件，对性能好，因为分开处理
 */
import { nanoid } from 'nanoid';
import { v4 as uuidv4, v1 } from 'uuid';


class App extends React.Component {

  render() {
    console.log(nanoid());
    return (
      <div></div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)