// 整体导出
interface Person {
  name: string,
  age: number,
}

const person: Person = {
  name: 'commonjs',
  age: 24
}

module.exports = person


// 单独导出
exports.type = 'commonjs'
exports.age = 24

