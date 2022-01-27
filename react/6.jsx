/**
 * 事件处理
 * DOM事件处理 addEventListener 
 * 
 * 
 * React.createElement(
    'button',
    {
      onClick: { this.doSth }
    },
    'click'
  )
 *
 *  React将事件处理之间放在React元素上绑定
 *  React认为事件处理和视图是有程序上的直接关系的
 *  分离的是视图和逻辑，而不是事件
 *  事件处理和视图写在一起可以更加直观的表述视图和逻辑的关系
 *  更加好维护
 */

class App extends React.Component {

  doSth = (p1, p2, e) => {
    console.log(p1, p2, e);
    // console.log(this);
    // console.log(e); // dispatchConfig 合成基础事件对象 React重新定义
  }
  doSth2(e) {
    /**
     * 默认处理函数的this为undefined
     * 
     */
    // console.log(this);
    // console.log(e);
  }
  doSth6(e) {
    console.log(e);
  }
  render() {
    return (
      <div>
        <button onClick={(e) => this.doSth(1, 2, e)}>click</button>
        <button onClick={this.doSth6}>click</button>
        {
          /**
           * <button onClick={() => this.doSth()}>click</button>
           */
        }
        // <a href="#" onClick={this.doSth2}>Ahref</a>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

