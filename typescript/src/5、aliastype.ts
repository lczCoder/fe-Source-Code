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

export {}