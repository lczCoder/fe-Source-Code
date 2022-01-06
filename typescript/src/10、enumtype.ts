// 枚举
// 1、双向映射关系（仅限于数字下标）
// 2、支持遍历 （下标和属性）

enum StrEnum {
  one = 'one1',
  two = 'two2'
}

enum Dates {
  cat=1,
  dog,
  miao=2,
  xixi,
}

for (let i in Dates){
  console.log(i)
}

// console.log(Dates[2])

/**
 * 枚举，通俗来说就是给一组数值，赋予一个名字来进行双向映射
 * 1、数字枚举
 * 初始器的值是从0开始，默认累加
 * 也可以自己给定初始器的值，后续可以进行覆盖
 * 2、字符串
 * 字符串枚举不具有双向映射的能力。
 */

