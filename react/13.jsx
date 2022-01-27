/**
 * lazy 内置方法 Suspense React内置组件，挂载到React  
 * 
 * React.lazy()
 *  -参数1个，函数 -> 动态导入组件 import()
 *  -减少打包体积，对初次渲染不适用的组件延迟加载
 *  -Suspense 未来即将要出现的事情，给现在的悬念
 *    -给lazy加上loading指示器组件的一个容器组件
 * 
 * lazy接受一个动态导入组件的函数
 * 该函数返回一个promise   -> polyfill
 * Promise会resolve一个默认导出的React组件  export default xx;
 * 
 * Suspense目前只和lazy配合实现组件等待加载指示器的功能
 * 
 * 服务端渲染 Loadable Components
 */
import Loading from './13.loading.jsx'

const MainComponent = React.lazy(() => import('./13.main.jsx'))
class App extends React.Component {

  render() {
    return (
      <React.Suspense fallback={<Loading />}>
        <React.Fragment>
          <MainComponent />
        </React.Fragment>

      </React.Suspense>
    )
  }
}