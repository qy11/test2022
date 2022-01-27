/**
 * 代码分割
 *  -减少应用体积、加载时的体积
 *  
 * 模块 ES6 module import export
 * import是关键字，不是函数
 *  -static  静态 导入加载时，导入的模块会被编译
 *  -dynamic 动态 import() 按需的或根据条件的模块导入
 * 
 * 1.模块太大，不需要马上加载
 * 2.模块异步获取
 * 3.动态构建路径 import('./' + a + b)
 * 4.触发条件才运行
 * 
 * 不要滥用
 *  -静态导入有利于初始化依赖
 *  -静态程序分析
 *  -tree shaking(去除没有使用代码) 静态导入会更好工作
 * 
 * import 返回值是Promise
 * 
 * 304 服务器响应，文件未修改
 * 
 * 
 * create-react-app 可以直接用import()
 * 手动webpack，查看指南
 * babel解析import(), 依赖 @babel/plugin-syntax-dynamic-import
 * 
 */

// var oBtn = document.getElementById('btn')
var oBtn = document.querySelector('#btn')
oBtn.onclick = async function () {
  var { plus } = await import('./12.module.jsx')
  console.log(plus(4, 8));
}