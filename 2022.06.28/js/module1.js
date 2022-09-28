var module1 = (function(){
    // 立即执行函数已经隔离了作用域，在其中定义的变量，函数，理论上无法在外部使用。
    // 解决了变量命名冲突问题。
    var m1 = function(){
        return {name : 'obj1'} ;
    };

    var m2 = function(){
        return {name : 'obj2'} ;
    };

    return {
        f1 : m1,
        f2 : m2
    }

})();
