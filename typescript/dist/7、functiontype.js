// 函数类型
// 在js中，定义函数有2种方法 
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // 1、函数声明  
    function add(x, y) {
        return x + y;
    }
    // add(1,'2') error 形参类型和实参不匹配
    // add(1) error 形参数量和实参不匹配
    // function ooo(x: number, y: number): number {
    //   return true
    // }  函数的返回值类型和定义的返回值类型不匹配
    // function ooo(x: number, y: number): void {
    //   return x + y
    // } 
    // 函数返回类型定义为void 但是实际有返回值 (报错) 
    // function ooo(x: number, y: number): number {} 
    // 函数定义了返回值，但是实际没有返回 （报错）
    // 2、函数表达式
    const sum = function (x, y) {
        return x + y;
    };
    // 看完上面函数声明的例子，在结合以往的开发经验，我们很容易吧函数表达式写成一下的形式
    const ooo = function (x, y) { };
    ooo(1, 2);
    // 编译运行都没报错，很完美嘛，但实际的过程并不是我们想象中的那么和谐。
    // 上述我们的代码编写，实际上是给=右侧的匿名函数
    // 定义了参数的类型和返回类型，至于ts编译运行不报错的原因是 ts有类型推断，会根据
    // =右侧的值来推断函数ooo的类型。
    // 所以为了严谨的编写代码,函数表达式需要使用ts中函数定义符号=>来进行约束，
    const ppp = function (x, y) { };
    const uu = function (x, y, z) {
        return x + y;
    };
    // 可选参数
    // 开发实际场景中，我们定义了3个形参，但是我们不一定会都传入3个实参，有些参数可能不是必须的
    // js中对函数参数不进行限制，传了就接收，不传就没有，ts规定函数的形参和实参必须一一对应，
    // 但是ts针对以上的开发场景，给出了解决方案，通过修饰符？来把必传参数更改为可选参数
    function yy(x, y) {
        console.log(x);
        console.log(y);
    }
    // yy (1,2) ok 可以执行
    // yy (1) error 报错，提示未提供y变量
    function choice(x, y) {
        console.log(x);
        console.log(y);
    }
    choice(1);
    choice(1, 2);
    // 这样就把y这个参数定义成可选参数，不传的话也不会报错
    // 注意：虽然y变成了可选参数，但是必选参数的位置和类型还是要一一对应，多传或者少传还是会报错
    // function order(x:number, y?:number,z:number): void {}
    // ts中规定，可选参数必须要在必选参数的后头，否则就会报错，
    // 函数参数默认值
    // 在js ES6之后，允许给函数的参数添加默认值，ts也沿用了js的写法
    function _default(x, z, y = 100) {
        console.log(x + y);
    }
    // 函数参数默认值可以穿插在任意的地方，不受可选参数和必选参数的影响，可选参数可以写在默认参数的前后任意位置
    // 不受和必选参数一样的约束，解放啦！
    // 剩余参数
    function remain(x, ...arg) { }
    function output(x) {
        return x;
    }
});
