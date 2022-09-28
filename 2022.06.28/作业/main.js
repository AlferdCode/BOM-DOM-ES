document.addEventListener('DOMContentLoaded',function(){
    var imgs = document.querySelectorAll('.minDH ul li img');
    // console.log(LBimg[0].minSrc);
// 遍历小图索引src
    for(var i = 0 ; i< imgs.length ;i++ ){
        imgs[i].src = LBimg[i].minSrc;
    }
    var ul = document.querySelector('.minDH ul');
    var left = document.querySelector('.left');
    var right = document.querySelector('.right');
    // 点击事件
    right.onclick = function(){
             ul.style.left = '-350px';
    }
    left.onclick = function(){
            ul.style.left = '0';
    }
    //轮播图
    var video = document.querySelector('video');
    var imgMax = document.querySelector('.imgMax');
    // video.src = LBimg[0].middleSrc;
    Array.from(imgs).forEach(function(item,index){
       item.addEventListener('mouseover',function (){
        if(index == 0){
            video.style.display = 'block';
            imgMax.style.display = 'none';
            video.src = LBimg[0].middleSrc;
        }else{
            video.style.display = 'none';
            imgMax.style.display = 'block';
            imgMax.src = LBimg[index].middleSrc;        
        }
       })
       imgMax.addEventListener('mousemove',function(e){
        imgMax.style.height = 420*3+'px';
        imgMax.style.width = 420*3+'px';
        var X = -e.pageX+550 ;
        var Y = -e.pageY+150 ;
        if(e.pageX-550 >= 0 && e.pageX-550 <= 420&& e.pageY-150 >= 0 && e.pageY-150 <= 420){
            imgMax.style.left =X*2+'px';
            imgMax.style.top =Y*2+'px';
        }
       })
       imgMax.addEventListener('mouseout',function(){
        imgMax.style.height = 420+'px';
        imgMax.style.width = 420+'px';
        imgMax.style.top = '0px';
        imgMax.style.left = '0';
       })
       

    })






})