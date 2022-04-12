// 单个导出
export let a: number = 1;

// 多个导出
let b: number = 2;
let c: number = 3;
export { b, c }

// 接口导出
export interface Person {
  name: string,
  age: number
}

// 声明函数导出函数 
export function log(name: string, age: number): void {
  console.log(name, age);
}

export const logs = (name: string, age: number): void => {
  console.log(name, age);
}

// 匿名函数导出
export default function (name: string, age: number): void {
  console.log(name, age);
}

// 导出时设置别名
function dog(name: string): void {
  console.log(name);
}
export { dog as cat }

// 引入外部模块 重新导出
export {text as Text} from './import';



