// 函数类型
// 在js中，定义函数有2种方法 

// 1、函数声明  
function add(x: number, y: number): number {
  return x + y
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
const sum = function (x: number, y: number): number {
  return x + y
}

// 看完上面函数声明的例子，在结合以往的开发经验，我们很容易吧函数表达式写成一下的形式
const ooo = function (x: number, y: number): void { }
ooo(1, 2)
// 编译运行都没报错，很完美嘛，但实际的过程并不是我们想象中的那么和谐。
// 上述我们的代码编写，实际上是给=右侧的匿名函数
// 定义了参数的类型和返回类型，至于ts编译运行不报错的原因是 ts有类型推断，会根据
// =右侧的值来推断函数ooo的类型。
// 所以为了严谨的编写代码,函数表达式需要使用ts中函数定义符号=>来进行约束，
const ppp: (x: number, y: number) => void = function (x: number, y: number): void { }

// 注意 ： 在ts的类型定义中， 函数定义符号=> 和 js ES6语法的箭头函数()=> 非常相似，别弄混了


// 用接口定义函数
interface Fn {
  (x: number, y: number, z?: number): number
}

const uu: Fn = function (x: number, y: number, z?: number) {
  return x + y
}


// 可选参数
// 开发实际场景中，我们定义了3个形参，但是我们不一定会都传入3个实参，有些参数可能不是必须的
// js中对函数参数不进行限制，传了就接收，不传就没有，ts规定函数的形参和实参必须一一对应，
// 但是ts针对以上的开发场景，给出了解决方案，通过修饰符？来把必传参数更改为可选参数

function yy(x: number, y: number): void {
  console.log(x)
  console.log(y);
}
// yy (1,2) ok 可以执行
// yy (1) error 报错，提示未提供y变量

function choice(x: number, y?: number): void {
  console.log(x)
  console.log(y);
}
choice(1)
choice(1, 2)
// 这样就把y这个参数定义成可选参数，不传的话也不会报错
// 注意：虽然y变成了可选参数，但是必选参数的位置和类型还是要一一对应，多传或者少传还是会报错
// function order(x:number, y?:number,z:number): void {}
// ts中规定，可选参数必须要在必选参数的后头，否则就会报错，


// 函数参数默认值
// 在js ES6之后，允许给函数的参数添加默认值，ts也沿用了js的写法
function _default(x: number, z?: number, y: number = 100): void {
  console.log(x + y);
}
// 函数参数默认值可以穿插在任意的地方，不受可选参数和必选参数的影响，可选参数可以写在默认参数的前后任意位置
// 不受和必选参数一样的约束，解放啦！

// 剩余参数
function remain(x: number, ...arg: any[]) { }
// 通过es6 语法扩展运算符...来解析剩余参数， 剩余参数会被包装到一个数组里头，所以定义剩余参数的类型需要使用数组类型
// 注意： 剩余参数 只能作为最后一个参数来进行获取
// function zz(w:number,...arg:any[],z:number){} error 报错


// 函数重载
// 函数重载的概念 刚接触可能比较难理解 
// 核心描述就是，有的函数，传入的参数类型是不确认的，所以输出的类型也是不确定的 
// 我们通过重载去定义传入和传出的类型，更精确的去进行类型匹配
// 🌰
// function output(x: number | string | boolean): number | string | boolean | void {
//   return x
// }
// 这里函数的参数和返回值的类型都是联合对象，无法做到输入输出的限定，我们使用函数重载来进行优化
function output(x: number): number;
function output(x: string): string;
function output(x: boolean): boolean;
function output(x: number | string | boolean): number | string | boolean | void {
  return x
}

// 上述代码中，我们定义了3个函数重载，最后一个是函数本身的实现，这样就能有效的约束输入和输出的数据类型
// 函数执行的时候 会从上到下 优先去匹配符合的一个重载类型


/**
 * 1、函数可以理解为是一个加工厂，需要输入原材料，输出成品
 * 2、所以我们需要在输入端（参数）输出端（return）进行类型限制
 * 注意：
 *  1、ts和js的区别在于，js的函数参数，可以传，也可以不传，没有限制
 *  2、ts中，形参和实参的数量和类型，必须一一对应
 *  3、ts可以通过修饰符？把参数变成可选参数
 *  4、ts中仍有js中的默认参数和剩余参数
 *  5、ts中对多类型的输入输出函数，可以进行函数重载的方式来加以限制
 * 
 */







export { }