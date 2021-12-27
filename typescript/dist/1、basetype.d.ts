declare const num0: number;
declare const num1: number;
declare const num2: number;
declare const num3: number;
declare const num4: number;
declare const str0: string;
declare const str1: string;
declare const bool0: boolean;
declare const bool1: boolean;
declare const n0: null;
declare const u0: undefined;
/**
 * null和undefined是所有类型的子类型,理论上来说，具有null和undefined类型的变量
 * 可以赋值给任意的对象
 * ! 如果你的编译器报错了，请在tsconfig.json配置中把"strictNullChecks": false,设置为关闭
 * 默认打开设置，因为通常情况下，把null和undefined赋值给其他类型变量是不必要的。
 */
declare const fn0: () => void;
declare function fn1(): void;
declare const sys: symbol;
/**
 * symbol 是es6中推出的新特性，使用的时候需要注意typescript对应解析的版本库，
 * 在tsconfig.json中把target 提升至es2015往上
 * 在使用symbol的时候，不需要使用new Symbol的方式去创建symbol对象，直接Symbol()即可
 */
