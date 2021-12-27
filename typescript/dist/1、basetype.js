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
const num0 = 10; //整数
const num1 = 10.5; //浮点数
const num2 = 0b10; //进制数
// js中常见进制格式 二进制0b开头 八进制0开头 16进制0x开头
const num3 = NaN; // not a number
const num4 = Infinity; // 无穷数
// 字符
const str0 = 'string'; //普通字符
const str1 = `string`; //ES6 模板字符
// 布尔值
const bool0 = true; //真
const bool1 = false; //假
// numm && undefined
const n0 = null;
const u0 = undefined;
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
const fn0 = () => {
    console.log();
};
function fn1() {
    alert();
}
// sysbal
const sys = Symbol('s');
/**
 * symbol 是es6中推出的新特性，使用的时候需要注意typescript对应解析的版本库，
 * 在tsconfig.json中把target 提升至es2015往上
 * 在使用symbol的时候，不需要使用new Symbol的方式去创建symbol对象，直接Symbol()即可
 */
