"use strict";
var personList = [
    { name: 'Taro', age: 30 },
    { name: 'Jiro', age: 20 },
    { name: 'Saburo', age: 10 },
    { name: 'yoshio', age: 10 },
];
var over20 = personList.filter(function (elm) { return elm.age >= 20; });
over20.forEach(function (elm) {
    console.log("Name: " + elm.name + ", Age: " + elm.age);
});
for (var test in over20) {
    console.log('test: ', test);
}
//# sourceMappingURL=index.js.map