var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * 类
 *  -父类 parent class   超类 super class
 *  -子类 child class
 *
 * 修饰符  限制对类里面不同方法和属性的访问
 *   -public
 *   -private 只能在当前类的其他方法中被调用
 *   -protected 当前类的其他方法 或者 子类的其他方法中
 *   -不是从安全方面考虑的，为了让其他人不要触碰这个方法
 */
var All = /** @class */ (function () {
    function All() {
    }
    All.prototype.sang = function () {
        console.log("sang");
    };
    All.prototype.sangIng = function () {
        console.log("sangIng");
    };
    return All;
}());
var Human = /** @class */ (function (_super) {
    __extends(Human, _super);
    function Human() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Human.prototype.scream = function () {
        console.log("scream");
    };
    Human.prototype.sing = function () {
        console.log("sing");
    };
    Human.prototype.startSing = function () {
        this.sing();
        // this.sang(); //不能访问
        this.sangIng(); // 可以访问
    };
    return Human;
}(All));
var human = new Human();
human.scream();
// human.sing(); // 私有属性，访问不到
human.startSing();
/** */
var Animal = /** @class */ (function () {
    // name: string;
    // constructor(name: string) {
    //   this.name = name;
    // }
    // constructor(public name: string) {
    //   this.name = name;
    // }
    // constructor(private name: string) {
    //   this.name = name;
    // }
    function Animal(name) {
        this.name = name;
        this.name = name;
    }
    return Animal;
}());
var animal = new Animal("Dog");
// console.log(animal.name); // Dog
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, age) {
        var _this = _super.call(this, name) || this;
        _this.age = age;
        return _this;
    }
    return Dog;
}(Animal));
var dog = new Dog("Lee", 12);
// console.log(dog.name);
