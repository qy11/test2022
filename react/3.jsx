/**
import { React } from 'react';
import { ReactDOM } from 'react-dom';
 * html中的div容器为根节点
 * 根节点内所有内容都是有ReactDOM进行管理
 * 一个React应用只有一个根节点
 * 用ReactDOM.render方法将react元素渲染到根节点中
 * 
 * 基本的更新逻辑
 *   1.React元素是不可变的对象
 *     immutable Object
 *      -（1）不能添加属性
 *      -（2）不能修改、删除、修改属性的枚举、配置、可写
 *                                    enumerable/configurable/writable
 * 
 * 虚拟节点的对比
 *  -ReactDOM.render会深度对比新旧元素的状态，只会做必要的真实DOM更新
 *    -渲染之前 -> 每个React元素组成一个虚拟DOM的对象结构 -> 渲染
 *    -更新之情，-> 形成新的虚拟DOM对象结构 -> 对比新旧虚拟DOM节点
 *    -分析出两者的不同点 -> 形成一个DOM更新的补丁 -> 更新真实DOM 
 */


// const rEl = <div>
//   <p>
//     hello
//     <span>
//       world
//     </span>
//   </p>
// </div>
// console.log(rEl);

// rEl.a = 1 //TypeError: Cannot add property a, object is not extensible
// delete rEl.props //Cannot delete property 'props' of #<Object>

// ReactDOM.render(rEl, document.getElementById('app'))



// const updated = () => {
//   const rEl = <div>
//     <p>
//       hello
//     </p>
//     <p>{new Date().getTime().toString()}</p>
//   </div>

//   ReactDOM.render(
//     rEl,
//     document.getElementById('app')
//   )
// }
// setInterval(updated, 1000)

/**
 * 组件渲染
 *  ReactDOM.render的第一个参数一定是React元素
 *    -组件使用JSX语法
 *    -使用React.createElement将组件转为React元素
 */

class Title extends React.Component {
  constructor(props) {
    super(props)
    document.cookie = "name=xiaohong;max-Age="
    document.cookie = key + "=" + value + ";max-age=" + expTime;
    document.cookie = `${key}=${value};max-age=${expTime}`;
  }
  render() {
    return "速度"
  }
}
ReactDOM.render(
  // <Title />,
  React.createElement(Title), //两种方法都可
  document.getElementById('app')
)

/**
 * 前端的 语义化 很重要
 * 
 * form 提交表单
 *      同步提交 -> 跳转页面 -> 前端无法验证表单数据的合法性
 *      异步提交 -> <form onsubmit='return false'>  onsubmit只认boolean
 * 
 * SSO single sign on 单点登录  不同源，可同时获取登录状态，即获取到 cookie
 *  www.baidu.com
 *  zhidao.baidu.com
 *  picture.baidu.com 
 * 
 * token 身份令牌 32/16位  A-Za-z0-9随机字符串  每次登录操作就会重新生成
 * 
 * auth: ident_code:token
 * 
 * PC 30天  APP 1年
 * 
 * 服务器端的cookie和客户端的cookie可能不一样
 * 
 * 登录完成后要刷新
 *    -验证cookie是否合法
 *    -密码
 */
function test(e) {
  var e = e || window.event;
  e.preventDefault();
  e.stopPropagation()
}