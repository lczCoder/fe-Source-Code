export let text = 'ES6'

// 批量导入
import { a, b, c } from './export'

// 导入接口
import { Person } from './export'
const person: Person = {
  name: '',
  age: 24
}

// 默认导入 default 
import Log from './export'
Log('ES6', 24)

// 导入时设置别名
import {log as LOG} from './export'
LOG('ES6', 24)

// 用一个变量接收全部的导入
import * as All from './export'
console.log(All);


