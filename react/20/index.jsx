/**
 * Refs 
 *  -允许访问真实DOM
 * 
 * React数据流 -> 通过props实现父子组件交互
 * Refs强制修改子组件
 * 
 * ref在componentDidMount触发前更新
 * 
 * ref -> html元素 -> current -> 真实DOM
 * ref -> class组件上 -> current -> 组件实例
 * ref -> 函数组件上 -> 没办法用 React.useRef()
 */

class VideoComponent extends React.Component {
  constructor(props) {
    super(props)
    this.videoRef = React.createRef()
  }
  handlePlay = () => {
    this.videoRef.current.play()
  }
  handlePause = () => {
    this.videoRef.current.pause()
  }
  render() {
    return <div>
      <video src="/i/movie.ogg" controls ref={this.videoRef}>
      </video>
      <button onClick={this.handlePlay}>play</button>
      <button onClick={this.handlePause}>pause</button>
    </div>;
  }
}

//强制动画
class TransitionComponent extends React.Component {
  constructor(props) {
    super(props)
    this.boxRef = React.createRef()
  }
  handleBox = () => {
    const oBox = this.boxRef.current;
    oBox.style.width = '500px'
    oBox.style.height = '500px'
  }

  render() {
    return <div>
      <div
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: 'orange',
          transition: 'all 1s'
        }}
        ref={this.boxRef}
      >
      </div>
      <button onClick={this.handleBox}>play</button>
    </div>;
  }
}



class App extends React.Component {
  render() {
    return <div>
      <VideoComponent />
      <TransitionComponent />
    </div>;
  }
}
export default App