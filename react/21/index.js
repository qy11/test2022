
/**
 * JSX实际上是React.creatElement的语法糖
 * JSX 编译为 React.creatElement形式
 * 书写规范
 *  -小写字母开头代表HTML的内置组件<div /> <h1 />
 *  -作为React.createElement第一个参数
 * 
 *  -大写字母开头的自定义组件 <MyButton />
 *  -编译 React.createElement(MyButton)
 * 
 * 运行时选择React类型
 *  -
 * 
 * 字面量表达式 <MyBtn title='true' />
 * 表达式 <MyBtn title={true} />
 * 
 * <MyBtn title />  
 *  -不赋值属性 -> 默认就是Bool 真
 *  -不推荐这样，语义化不好  ES6省略属性值 { title } => { title : title }
 * 
 * 
 * 字符串字面量
 *  -去掉收尾空格换行
 *  -字符串之间的多个空格压缩为一个空格(&nbsp)
 *  -换行压缩为一个空格<br />
 *  -this is a $lt;TITLE&gt; <TITLE>
 * 
 * 
 * null, undefined, bool, 都可作为JSX的子元素，不会渲染,标签会渲染, 为解决条件渲染的问题
 * String(null)
 * 
 * this.state.data.length && '有数据'
 *  -为0的话，会渲染为0
 *  -his.state.data.length > 0 && '有数据'
 */

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div className='box' id="J_Box">
          <h1 className='title'>
            this is a  <span>123</span>
          </h1>
        </div>
        {
          React.createElement(
            'div',
            {
              className: 'box',
              id: "J_Box"
            },
            React.createElement(
              'h1',
              {
                className: 'title'
              },
              "this is a",
              React.createElement(
                'span',
                null,
                '123'
              )
            )
          )
        }
      </div>
    )
  }
}

class Header extends React.Component {

  static components = {
    'login': LoginBtnGroup,
    'welcome': WelcomeInfo
  }
  render() {
    const HeaderUser = Header.components[this.props.type]
    return <HeaderUser {...this.props} />
  }
}