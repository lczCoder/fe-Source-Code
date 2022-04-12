"use strict";
// 后续定义的变量，约定类型为Person，就会对变量进行类型检查
let man = {
    name: 'xiaoming',
    age: 24,
    sex: '男',
    run: function () { }
};
// 这样 man这个对象 就会受到Person接口规则的约束，name,age,sex都是必有属性，name,sex类型是字符串，age类型是数字
// 对象的属性比接口多和少都是不被允许的
// interface Animal {
//   name: string,
//   kind: string,
//   run?: Function
// }
// let cat: Animal = {
//   name: 'tom',
//   kind: 'Cat',
// }
// 可以通过修饰符？ 来设置可选属性和方法，这样，无论这个属性是否存在，都不会引起类型报错，
// ！如果可选属性 写了 就必须是定义的类型
// 可选修饰符只能设置定义的属性是否必须存在，未定义的属性任然不能添加到对象里
// 我们可以通过给接口设置任意属性，来扩展我们的对象
// interface Animal {
//   name: string,
//   kind: string,
//   [props: string]: string
// }
// let x: Animal = {
//   name: 'tom',
//   kind: 'Cat',
//   color: 'red',
// }
// [props: string]: string  props名称随意起，但是规范的话还是用propname:属性是string类型
// 需要注意的是，必选类型和可选类型的定义类型，都必选是任意类型的子类型。
// ！🌰 任意属性，props定义类型number，但是必填属性和可选属性是string类型，string不属于number的子集，所以报错
// interface Animal {
//   name: string,
//   kind?: string,
//   [props: string]: string
// }
// 解决方法：
//1、把任意属性设置为any类型，（不推荐） 因为这样，任意属性就失去类型校验的能力，
// interface Animal {
//   name: string,
//   kind?: string,
//   [props: string]: any
// }
// 2、通过联合类型来设置
// interface Animal {
//   name: string,
//   kind?: string,
//   [props: string]: string | number
// }
// 3、复杂的联合类型可以通过别名来进行简写和复用
// type PropsType = string | number 
// interface Animal {
//   name: string,
//   kind?: string,
//   [props: string]: PropsType
// }
// 只读属性
// 当我们希望对象中的某些属性仅具有只读属性，不允许进行修改操作的时候，
// 可以通过修饰符，readonly来进行限制
// interface Animal {
//   readonly name: string;
//   readonly id: number;
// }
// let cat: Animal = {
//   name: 'tom',
//   id: 0
// }
// console.log(cat.name) ✔️ 通过
// cat.name = 'tim' ❌ 报错
// 接口的定义，可以通过继承的方法来实现
// interface Animal{
//   name:string;
//   color:string;
// }
// interface Cat extends Animal{
//   run:Function
// }
// let cat:Cat = {
//   name:'tom',
//   color:'origin',
//   run:function(){}
// }
