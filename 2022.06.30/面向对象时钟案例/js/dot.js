
function Dot(className){
    Box.call(this,className);
}

Dot.prototype = Object.create(Box.prototype);
Dot.prototype.constructor = Dot;

Dot.prototype.render = function(){
    var div = document.createElement('div');
    div.classList.add(this.className);
    var span = document.createElement('span');
    div.appendChild(span);
    var box = document.querySelector('.box').appendChild(div);
}