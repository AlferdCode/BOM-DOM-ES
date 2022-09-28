function Line(className){
    Box.call(this,className);
}

Line.prototype = Object.create(Box.prototype);
Line.prototype.constructor = Line;

// 重写父类
Line.prototype.render = function(){
    var div = document.createElement('div');
    var className = this.className.split(' ');
    if(className.length>0){
        className.forEach(function(cn){
            div.classList.add(cn);
        })
    }
    var span = document.createElement('span');
    div.appendChild(span);
    var box = document.querySelector('.box').appendChild(div);
}