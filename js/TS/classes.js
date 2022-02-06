"use strict";
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
class All {
    sang() {
        console.log("sang");
    }
    sangIng() {
        console.log("sangIng");
    }
}
class Human extends All {
    scream() {
        console.log("scream");
    }
    sing() {
        console.log("sing");
    }
    startSing() {
        this.sing();
        // this.sang(); //不能访问
        this.sangIng(); // 可以访问
    }
}
const human = new Human();
human.scream();
// human.sing(); // 私有属性，访问不到
human.startSing();
/** */
class Animal {
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
    constructor(name) {
        this.name = name;
        this.name = name;
    }
}
const animal = new Animal("Dog");
// console.log(animal.name); // Dog
class Dog extends Animal {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
}
const dog = new Dog("Lee", 12);
// console.log(dog.name);
