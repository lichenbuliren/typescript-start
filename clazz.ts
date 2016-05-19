// /**
//  * 使用 Class , Interfaces , Mixins 特性
//  */

// 'use strict'

// // 使用 Class 特性

// /**
//  * 列表组件，
//  */
// class ListComponent {

//     things: Array<ListItem>; // 或者 things: ListItem[];

//     constructor() {
//         // 在 typescript 里面，所有将要绑定到 this 的变量，都需要明确一个具体的类型
//         this.things = [];
//     }
// }

// class ListItem {

//     name: string;

//     constructor(name) {
//         this.name = name;
//     }
// }

// let testItem = new ListItem('Thing to do');
// console.log(testItem.name);

// /**
//  * 访问修饰符
//  * public 修饰符表明可以从任何地方 read or write 
//  * private 只能在 class 内部读写
//  */
// class ListComponent2 {

//     public things: ListItem[];

//     constructor() {
//         this.things = [];
//     }
// }

// class ListItem2 {

//     public name: string;

//     constructor(name) {
//         this.name = name;
//     }
// }

// class ListComponent3 {

//     private things: ListItem[];

//     constructor() {
//         this.things = [];
//     }
// }

// class ListItem3 {

//     private name: string;

//     constructor(name) {
//         this.name = name;
//     }
// }

// let item3 = new ListItem3('test private property');
// // console.log(item3.name); //这里会引起编译错误


