// 数组类型
// 在ts中。数组有3中定义方式
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // 第一种 格式 value: 定义类型[] = [] //数据里的内容，必须符合定义类型
    let arr1 = [1, 2, 3];
    let arr2 = ['1', '2', '3'];
    let arr3 = [true, false];
    let arr4 = ['1', 2, '3'];
    // ！ 但不能是一个联合类型
    // let arr5: string | number[] = [1,'2'] 报错
    // 对象数组可以通过接口的方式来进行定义
    let arr10 = [{ name: '小米', age: 24 }];
    // 第二种 通过泛型来定义数组
    let arr5 = [1, 2, 3];
    let arr6 = ['1', '2', '3'];
    let arr7 = [1, '2', true, {}, []];
});
