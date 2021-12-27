// 类型别名
// 类型别名是为了简化类型判断写法的一种方法
type GetSomeThing = string | number 
let value:GetSomeThing = 10
value = '123'

function output(x:GetSomeThing):GetSomeThing{
  console.log((x as string).length)
  return x
}

// 可以和泛型进行结合

function getout<T>(x:T):T{
  return x
}

getout<GetSomeThing>(123)


// 字符串字面量限制
type SelectString = 'name' | 'age' | number | boolean 
let x:SelectString = 'name'
x = 'age'
x = 123
x = true
// x = '123' //error 变量类型只能是联合类型中限制的，如果是字符串就限制只允许赋值定义的固定值


/**
 * 1、一般会把比较复杂的联合类型，定义一个别名，简化书写流程
 * 2、联合变量是类型的限制, 别名是类型和值的限制。
 */


export {}