// 数组类型
// 在ts中。数组有3中定义方式

// 第一种 格式 value: 定义类型[] = [] //数据里的内容，必须符合定义类型

let arr1: number[] = [1, 2, 3]
let arr2: string[] = ['1', '2', '3']
let arr3: boolean[] = [true, false]
// 定义类型不单单是一个基础类型。也可以是一个别名
type ArrType = string | number
let arr4: ArrType[] = ['1', 2, '3']
// ！ 但不能是一个联合类型
// let arr5: string | number[] = [1,'2'] 报错

// 对象数组可以通过接口的方式来进行定义
let arr10: { name: string; age: number, sex?: string }[] = [{ name: '小米', age: 24 }]


// 第二种 通过泛型来定义数组
let arr5: Array<number> = [1, 2, 3]
let arr6: Array<string> = ['1', '2', '3']
let arr7: Array<any> = [1, '2', true, {}, []]

// 第三种 通过接口来定义数组
// 一般情况下，我们不会用接口来定义数组，有几个特殊情况可以使用

// 例子🌰
// function add (){
//     let arg:number[] = arguments  error
// }
function upp() {
  let args: {
    [index: number]: number;
    length: number;
    callee: Function;
  } = arguments;
}
function add() {
  let args: IArguments = arguments;
}
/**
 * 1、函数参数列表arguments是一个类数组结构，不是一个真正的数组，没有数组的方法
 * 2、NodeList \ HTMLCollection 等数据结构，也是类数组，需要通过接口来定义
 * 3、在ts中，有这些特殊类型的接口定义方法， IArguments, NodeList, HTMLCollection
 */


interface Obj {
  name: string,
  age: number,
  info: Object
}

let x: Obj[] = [{
  name: 'lcz',
  age: 24,
  info: {}
}]

export { }