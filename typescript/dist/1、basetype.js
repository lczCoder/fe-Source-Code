"use strict";
/*
 * 基本数据类
 * 1、数值
 * 2、字符值
 * 3、布尔值
 * 4、null && undefined
 * 5、void 函数无返回值
 */
// 数值
var num0 = 10; //整数
var num1 = 10.5; //浮点数
var num2 = 2; //进制数
// js中常见进制格式 二进制0b开头 八进制0开头 16进制0x开头
var num3 = NaN; // not a number
var num4 = Infinity; // 无穷数
// 字符
var str0 = 'string'; //普通字符
var str1 = "string"; //ES6 模板字符
// 布尔值
var bool0 = true; //真
var bool1 = false; //假
// numm && undefined
var n0 = null;
var u0 = undefined;
/**
 * null和undefined是所有类型的子类型,理论上来说，具有null和undefined类型的变量
 * 可以赋值给任意的对象
 * ! 如果你的编译器报错了，请在tsconfig.json配置中把"strictNullChecks": false,设置为关闭
 * 默认打开设置，因为通常情况下，把null和undefined赋值给其他类型变量是不必要的。
 */
// let n:number = null
// let w:symbol = undefined
// ……
// void
var fn0 = function () {
    console.log();
};
function fn1() {
    alert();
}
