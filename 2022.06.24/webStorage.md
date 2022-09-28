# 1. 什么是webStorage?
```
webStorage是h5提供的新特性(ES6 ES2015)，和cookie类似，用来保存数据，让数据在浏览器上共享。
它分两种类型：sessionStorage会话存储，localStorage本地存储。

使用HTML5可以在本地存储用户的浏览数据。早些时候,本地存储使用的是 cookie。但是Web 存储需要更加的安全与快速，这些数据不会被保存在服务器上（重点），但是这些数据只用于用户请求网站数据上。它也可以存储大量的数据（重点），而不影响网站的性能。数据以 键/值 对存在, web网页的数据只允许该网页访问使用。

使用webStorage时，客户端和服务器通讯时，客户端不需要携带webStorage存储的数据。
而使用cookie时，客户端和服务器通讯时，客户端要携带cookie数据传递给服务器，让服务器根据cookie存储的数据验证客户端的身份。

Web Storage的目的是为了克服由cookie带来的一些限制，当数据需要被严格控制在客户端上时，无须持续地将数据发回服务器。

1kb = 1024bit(字节)  1M=1024kb

cookie和webStorage的区别：

cookie存储的数据小，大概4kb；
cookie可以存储在服务器，又可以存储在客户端;
cookie不安全;
cookie需要携带，占用网络带宽，性能低。
webStorage大概能存储5M；
webStorage安全性高;
webStorage不需要携带，只能存储在客户端。
```

2. webStorage 和 cookie 的区别？（防面试）
webStorage比cookie安全
webStorage比cookie存储的数量大
webStorage无需在客户端和服务器请求过程中携带，而cookie需要。

https://blog.csdn.net/qq_33188563/article/details/82154292
https://www.cnblogs.com/lidongcn/p/4493496.html

3. sessionStorage 和 localStorage API，方法名称和使用方式都一样。

length 属性。
setItem (key, value) ——  保存数据，以键值对的方式储存信息。
getItem (key) ——  获取数据，将键值传入，即可获取到对应的value值。
removeItem (key) ——  删除单个数据，根据键值移除对应的信息。
clear () ——  删除所有的数据
key (index) —— 获取某个索引的key

**最大缺点：兼容性。低版本浏览器不认识它。**


# webStorage 和 cookie 的区别？
## 共同点：
都是保存在浏览器端，且同源的。
cookie:存储在用户本地终端上的数据。数据存储空间小。
localStorage:没有时间限制的数据存储，数据存储空间大
sessionStorage:针对一个 session 的数据存储,当用户关  闭浏览器窗口后，数据会被删除。
## 区别：
cookie：数据始终在同源的http请求中携带。cookie数据不能超  过4k，同时因为每次http请求都会携带cookie，所以cookie只适  合保存很小的数据。
sessionStorage和localStorage不会自动把数据发给服务器，仅  在本地保存。sessionStorage和localStorage 虽然也有存储大  小的限制，但比cookie大得多，可以达到5M或更大。
1. 大小不同
cookie：数据不能超过4k。
sessionStorage和localStorage 虽然也有存储大小的限制，但  
比cookie大得多，可以达到5M或更大。
2. 有效期不同
cookie:可设置过期时间，直到设置时间到达之前  ，浏览器窗口关闭时也保留数据。
localStorage:始终有效，即使浏览器窗口关闭。  
sessionStorage:当浏览器窗口关闭前有效，不能持久保持
3. 作用域不同
cookie:所有同源窗口中都是共享的。
localStorage:在所有同源窗口中都是共享的。
sessionStorage:不在不同的浏览器窗口中共享，即使是同一个  页面；