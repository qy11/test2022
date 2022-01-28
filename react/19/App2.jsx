import InputHoc from './input/InputHoc';
import MyInput from './input/MyInput';

const MyInputHoc = InputHoc(MyInput)


class App2 extends React.Component {
  state = {
    a: 1,
    b: 2,
    c: 3
  }

  render() {


    return <div>
      <MyInputHoc {...this.state} />
    </div>;
  }
}
export default App2