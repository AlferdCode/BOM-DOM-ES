document.addEventListener('DOMContentLoaded',function(){
// 滚动监听
var hide = document.querySelector('.hide');
window.onscroll = function(){
    var scroll = document.documentElement.scrollTop || document.body.scrollTop ;
    if(scroll >= imga.offsetHeight){
        hide.style.top = '-100px';
    }else {
        hide.style.top = '0px';
    }
}
// 滚动监听结束
//轮播图
var imga = document.querySelector('.slideshow .slideshow_left img ') ;
var imgb = document.querySelector('.slideshow .slideshow_right img');
var li = document.querySelectorAll('.slideshow ul li')
var timer = setInterval(fn,3000);
imga.src = imgA[0];
imgb.src = imgB[0];
var flag = 0;
function fn(){
    flag += 1;
    if(flag >= 3){
        flag = 0;
    }
    imga.src = imgA[flag];
imgb.src = imgB[flag];
}
li[0].style.backgroundColor = '#e5e5e5';
li[0].style.border = '2px solid red';
li[0].style.padding = '4px';
Array.from(li).forEach(function(item,index){
    item.onclick = function(){
        for(var i = 0 ; i < li.length ; i++){

            li[i].style.backgroundColor = 'rgba(87, 86, 86, 0.39)';
            li[i].style.padding = '0px';
            li[i].style.border = '2px solid rgba(87, 86, 86, 0.39)';
        }
        imga.src = imgA[index];
        imgb.src = imgB[index];
        item.style.backgroundColor = '#e5e5e5';
        item.style.padding = '4px';
        item.style.border = '2px solid red';
    }
})

var span = document.querySelector('.slideshow ul span');
var aa = true ;
span.onclick = function(){
if(aa){
    clearInterval(timer);
    span.innerHTML = '▶';
    aa = false ;
}else {
    clearInterval(timer);
   timer = setInterval(fn,3000);
   span.innerHTML = '|&nbsp;|';
   aa = true ;
}
}
//轮播图结束



















})