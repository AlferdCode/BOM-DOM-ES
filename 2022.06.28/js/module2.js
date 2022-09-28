
// 放大模式：让一个模块扩展更多的功能，需要把一个模块作为实参传给空一格模块。
var module2 = (function(mod){

    mod.f3 = function(){
        console.log('我是mod2内的f3');
    }
    return mod;

})(module1);