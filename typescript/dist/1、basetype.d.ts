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
