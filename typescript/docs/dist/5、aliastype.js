define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let value = 10;
    value = '123';
    function output(x) {
        console.log(x.length);
        return x;
    }
    // 可以和泛型进行结合
    function getout(x) {
        return x;
    }
    getout(123);
    let x = 'name';
    x = 'age';
    x = 123;
    x = true;
});
