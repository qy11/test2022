/**
 * 函数类型注解
 *  -TS只会检查类型，不会检查逻辑
 *  -参数必需加类型注解，返回值会自动推断，最好加上
 *  -没有返回值为 void
 *  -never 类型表示的是那些永不存在的值的类型
 */
var addNum = function (a, b) {
    return a + b;
};
var logger = function (msg) {
    console.log(msg);
};
var throwError = function (msg) {
    if (!msg) {
        throw new Error(msg);
    }
};
var throwError2 = function (msg) {
    throw new Error(msg);
};
/**
 * 对象类型注解
 */
var profile = {
    name: "Mike",
    age: 20,
    coords: {
        lat: 30,
        lng: 50
    },
    setAge: function (age) {
        this.age = age;
    }
};
var age = profile.age;
var _a = profile.coords, lat = _a.lat, lng = _a.lng;
/**
 * arrays
 *  -提取值得时候做类型判断
 *  -防止不一样类型值加入
 *  -使用map、forEach、reduce函数是提供帮助
 *  -容纳不同类型
 */
var arr = [];
// arr.push("tt"); // 错误
var dates = [new Date()];
var studentsByClass = [
    ["mike", "joy"],
    ["tom", "lucy"],
];
studentsByClass.map(function (item) {
    return item;
});
var arrDate = [new Date()];
arrDate.push("999F");
/**
 * 元组 Tuple 使用情况较少 CSV文件
 *  -元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为 string和number类型的元组。
 *
 * 类型别名 Type Alias
 *  -type Drink = [string, boolean, number];
 */
var drink = {
    color: "brown",
    carbonated: true,
    sugar: 35
};
var pepsi = ["brown", true, 35];
// pepsi[0] = true; // 不能改变元素顺序
var tea = ["brown", false, 0];
var uncleMike = {
    name: "Mike",
    age: 20,
    married: false,
    summary: function () {
        return "\u540D\u5B57" + this.name;
    }
};
var uncleMike2 = {
    name: "Mike",
    age: 20,
    married: "false"
};
var printP = function (person) {
    console.log("\u59D3\u540D" + person.summary());
};
printP(uncleMike);
// printP(uncleMike2); // 报错
