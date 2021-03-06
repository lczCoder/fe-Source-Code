// 元组

// 一般的数组，是同一种类型的集合体，
// 但是元组，可以满足一个数组中，存在多种类型的情况，但是需要先提前定义好类型的顺序

let ary:[number,string,string]

// ary = [1,2,2]  error 元组在[1] [2]下标索引的位置定义了字符串类型，就不允许赋值数字
// ary = [1,'2','3']
// ary[0] = 2 √
// ary [1] = '2' √
// ary [5] = 123 error 提示下标5 没有对应的元素



/**
 * 1、直接给元组赋值，需要遵循数量和类型的约定
 * 2、可以单独根据下标给元素赋值，但还是要注意下标对应的数据类型，以及要在定义的下标范围内赋值
 */
export {}