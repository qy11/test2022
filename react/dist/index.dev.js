"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * React - 构建用户页面的JavaScript库
 * 
 * React主管意愿
 *  -1. 仅仅负责View层渲染
 *  -2. 是一个视图渲染的工具库，不做框架的事情
 * 
 * React -> React API -> 处理视图的API集合
 * ReactDOM -> 从render -> 虚拟DOM -> 真实DOM
 * 
 * React组件
 *  -1.继承React.Component
 *  -2.render函数返回一个视图
 * 
 * npx —— 它是 npm 5.2+ 附带的 package 运行工具。
 * create-react-app 内部的工程化： babel/webpack
 */
var MyButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MyButton, _React$Component);

  function MyButton(props) {
    var _this;

    _classCallCheck(this, MyButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MyButton).call(this, props));
    _this.state = {
      openStatus: false
    };
    return _this;
  }

  _createClass(MyButton, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var oP = React.createElement('p', {
        className: 'text',
        key: 1
      }, this.state.openStatus ? "打开状态" : "关闭状态");
      var oBtn = React.createElement('button', {
        key: 2,
        onClick: function onClick() {
          return _this2.setState({
            openStatus: !_this2.state.openStatus
          });
        }
      }, this.state.openStatus ? "关闭" : "打开");
      var wrapper = React.createElement('div', {
        className: 'wrapper'
      }, [oP, oBtn]);
      return wrapper;
    }
  }]);

  return MyButton;
}(React.Component);

ReactDOM.render(React.createElement(MyButton), document.getElementById('app')); // var span = React.createElement('span', {
//   className: 'text',
//   key: 1
// }, 'This is 路口')
// ReactDOM.render(
//   React.createElement('div', {
//     'data-tag': 'div'
//   },
//     [span]
//   ),
//   document.getElementById('app')
// )