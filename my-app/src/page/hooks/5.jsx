/**
 * 自定义hooks
 */

import React, { Component } from 'react';
import HocList from './service';


class List extends Component {
  render() {
    return <div>
      <ul dangerouslySetInnerHTML={{ __html: this.props.info.map(item => this.props.itemTpl(item)) }}>
      </ul>
    </div>;
  }
}

class Box extends Component {
  itemTpl = (item) => {
    return Object.entries(item).reduce((prev, [key, value]) => {
      return typeof (value) === 'object' ?
        prev += `<ul><li>${key}:${this.itemTpl(value)}</li></ul>` :
        prev += `<li>${key}:${value}</li>`
    }, '')
  }
  componentDidMount() {
    const obj = {
      a: 1,
      b: 2,
      c: 3
    }
    Object.defineProperties(obj, {
      d: {
        value: 4,
        enumerable: true
      },
      e: {
        value: 5,
        enumerable: false
      }
    })
    // console.log(Object.entries(obj)) // [ ['a', 1] , Array(2), Array(2), Array(2)]
  }
  render() {
    return <List {...this.props} itemTpl={this.itemTpl} />;
  }
}
const widthHOC = HocList(Box)
export default widthHOC