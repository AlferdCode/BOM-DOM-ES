# 什么是this
this:JS的关键词，是一个代词“指代不明”，需要代码执行过程中根据上下文判断this的指向。

# 默认情况下
- 全局域下 ：this代指window
- 对象调用方法中 ： this代指这个对象
- 直接调用函数 ： 函数中的this代指window

# 正常函数的this指向
- 全局调用，函数名(),指向window
- 对象调用，对象.函数名(),谁调用指向谁
- 自执行函数，指向window
- 事件处理函数，指向事件源
- 定时器处理函数，指向事件源
- 函数定义未调用，指向不明确……

# 改变this指向
- 定义变量：声明变量赋值为this“保存当前this指向”
- 使用箭头函数：箭头函数中的this与箭头函数所在的上下文中的this一致。
- 使用bind()函数，参数1:"this的新指向" 参数2:"原函数的固化值，实参"，this的新指向。
- 使用call()函数，参数1：this指向的对象“如果不写或者null表示window” 参数2~参数n:"原函数的固化值，实参"与函数形参一一对应。
- 使用apply()函数，参数1：this指向的对象“如果不写或者null表示window” 参数2:是一个数组“根据数组内的顺序依次传入实参”。

# bind 函数
```
不会立即执行函数
返回值：就是一个函数(是一个被改变过this的函数)
他传递参数的方式
1.调用返回的函数传递
2.直接从第二个参数开始一次传递
```

# call 和 apply 的区别
```
- 相同点
call和apply的功能相同"都是在特定的作用域中调用函数，等于设置函体内的this对象赋值"。

- 不同点
call和apply的接收参数的方式不同
call方法接收两个或多个参数，第一个this，第二个以后都是参数。
apply方法接收两个参数，第一个this，第二个是数组“参数集合”。
```



# 面试题
1. 改变this指向的方法有哪些?
2. call 和 apply 的区别?

