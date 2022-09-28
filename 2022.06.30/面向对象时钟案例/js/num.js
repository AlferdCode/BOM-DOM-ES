// 数字对象

function Num(className,num){
    Box.call(this,className);
    this.num = num;
}

Num.prototype = Object.create(Box.prototype);
Num.prototype.constructor = Num;

// 重写父类
Num.prototype.render = function(){
    var div = document.createElement('div');
    div.classList.add(this.className);
    var span = document.createElement('span');
    span.textContent = this.num;
    div.appendChild(span);
    var box = document.querySelector('.box').appendChild(div);
}