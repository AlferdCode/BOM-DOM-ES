// 小圈对象

function SmallCircle(className){
    BigCircle.apply(this,[className]);
}

SmallCircle.prototype = Object.create(BigCircle.prototype);

SmallCircle.prototype.constructor = SmallCircle;


// 重写父类render方法
SmallCircle.prototype.render = function(){
    var div = document.createElement('div');
    div.classList.add(this.className);
    document.querySelector('.outer').appendChild(div);
}

