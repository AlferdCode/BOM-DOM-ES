function Box(className){
    SmallCircle.call(this,className);
}

Box.prototype = Object.create(SmallCircle.prototype);
Box.prototype.constructor = Box;


// 重写父类方法
Box.prototype.render = function(){
    var div = document.createElement('div');
    div.classList.add(this.className);
    document.querySelector('.inner').appendChild(div);
}