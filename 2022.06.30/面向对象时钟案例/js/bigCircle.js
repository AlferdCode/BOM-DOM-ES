// 大圈对象

function BigCircle(className){
    this.className = className;
}

BigCircle.prototype.render = function(){
    var div = document.createElement('div');
    div.classList.add(this.className);
    document.body.appendChild(div);
}