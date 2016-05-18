/**
 * TypeScript's Basic Types
 * TypeScript 提供九种数据类型
 * Boolean
 * Number
 * String
 * Array
 * Tuple
 * Enum
 * Any
 * Void
 * Function
 */

// Boolean 数据类型
"use strict";

const lie: boolean = false;
const truth: boolean = true;
const year: number = 2016;
const nickname: string = "lichenbuliren";

// 数组类型，两种方式创建数组类型数据
const students: string[] = ['小名', '李磊', '阿拉蕾阿拉蕾'];
const teachers: Array<string> = ['a', 'b', 'c'];

// Tuples 元组数据类型，使用的时候必须声明类型
let athena: [string, number];
athena = ['lichenbuliren', 27];

var name: string = athena[0];
var age: number = athena[1];

// Enum 枚举类型,枚举类型可以当做其它类型一样来使用
enum Color { Red, Green, Blue };
const red: Color = Color.Red;

enum RomanceLanguages { Spanish = 1, French, Italian, Romanian, Portuguese };
console.log(RomanceLanguages[4]);
console.log(RomanceLanguages[0]);

// Any 数据类型,任意数据类型
let mystery: any = 4;
// 赋值不同类型的值，并不会引起报错
mystery = 'four';

const not_only_strings: any[] = [];
not_only_strings.push('this works!');
not_only_strings.push(42);

// void 类型，该类型一般和 undefined or null 关联
// 不像其它类型，我们不需要用这个类型来声明变量

// 不需要并不代表不行，如果非要的话，只能设置 void 类型的变量为 null or undefined;
let the_void: void = undefined;
the_void = null;

// the_void = 'nothing'; //报错

// Return Types ,返回数据类型
function capitalizeName(name: string): string {
    return name.toUpperCase();
}

console.log(capitalizeName('lichenbuliren'));


function even_broken(num: number): boolean {
    // 好的写法
    return (num % 2 == 0);
    // wrong, 这会引起编译错误
    // return (num % 2);
}


// Functions 类型
// 声明一个数据返回类型是number，第一个和第二个参数都是number的function类型
let multiply: (first: number, second: number) => number;
multiply = function (first,second) {
    return first*second;
}


// 如果返回类型也是一个function的时候怎么办，只需要用()括号将function括起来就OK了
// 这里我们的返回类型也是一个function,接收一个number类型的参数，同时返回类型为number;
let multiplyFirst: (first: number) => ((second: number) => number);
multiplyFirst = function(first:number) {
    return function(num:number) {
        return first*num;
    }
}

console.log(multiply(5,2)); // 10
console.log(multiplyFirst(9)(2)); // 18



