interface A {
  name: string,
  age: number,
}

interface A {
  sex: string
}

// 上述定义的2个接口，会被合并成一个
// interface Person {
//   name: string,
//   age: number,
//   sex: string
// }

const a: A = {
  name: 'human',
  age: 24,
  sex: 'man'
}

// 接口合并的时候，会检查 定义的接口属性，是否有冲突
// 如果2个接口中都定义了相同的一个属性 name 
// 但一个name:string  一个是name:number  这样就会产生保存

// 如果定义的是函数，就会合并成函数重载的方式
interface F {
  log(name:string): void // 3
}

interface F {
  log(name:number): void // 1
  log(name:boolean): void // 2
}
// 上述就是函数重载的一个先后顺序，在同一个接口中的函数重载，会按照先后顺序，按照函数的参数来排序
// 如果不是一个接口，会按接口定义的顺序来排列，后定义的接口顺序在先定义的接口前

interface F {
  log(name:'text'): void // 1
}

// 如果函数是通过字面量来定义类型的,会在重载顺序提升到第一位
