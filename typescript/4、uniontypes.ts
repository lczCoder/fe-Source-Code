export { }
// 联合类型
// 联合类型（Union Types）表示取值可以为多种类型中的一种。
let value: string | number = 100
value = '100'
// value = true  报错


function add(x:string | number):string|number {
  // console.log(x.length) 报错
  return x
}

/**
 * 1、联合类型指，当你定义的变量不清楚是什么类型的时候，可以使用联合类型，对这个变量
 * 的类型进行一个范围限制，（函数变量和返回值也可使用）
 * 2、你所定义的变量，只能使用联合类型中类型的方法
 * 比如：let value = string | number 
 * value.length 就会报错，因为number和string类型的原型链上 不存在.length的方法
 */