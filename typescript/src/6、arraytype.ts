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


export { }