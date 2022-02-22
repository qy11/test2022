/**
 * 装饰器 decorator
 *  -class包裹
 *  -装饰器包裹装饰器
 * 开放封闭原则
 */
class Shape {
  constructor(color = '红色') {
    this.color = color
  }
}

class Circle extends Shape {
  constructor(radius = 0, color) {
    super(color)
    this.radius = radius
  }
  resize(factor) {
    this.radius *= factor
  }
  toString() {
    return `一个半径为${this.radius}的圆形`
  }
}

class ColoredShape extends Shape {
  constructor(shape, color) {
    super()
    this.shape = shape;
    this.color = color
  }
  toString() {
    return `${this.shape.toString()},它有着${this.color}的颜色`
  }
}

class TransparentShape extends Shape {
  constructor(shape, transparency) {
    super()
    this.shape = shape;
    this.transparency = transparency;
  }
  toString() {
    return `${this.shape.toString()},它有${this.transparency * 100}%的透明度`
  }
}

let circle = new Circle(2)
console.log(circle.toString()); // 一个半径为2的圆形


let redCircle = new ColoredShape(circle, "red");
redCircle.shape.resize(5)
console.log(redCircle.toString()); //一个半径为10的圆形,它有着red的颜色

const transparency = new TransparentShape(redCircle, 0.5)
console.log(transparency.toString()); //一个半径为10的圆形,它有着red的颜色,它有50%的透明度