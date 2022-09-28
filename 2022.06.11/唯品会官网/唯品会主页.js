window.addEventListener('DOMContentLoaded',function(){
(function(){
    //
    var Zhengzhou = document.querySelector('.main-left'); 
    var floating = document.querySelector('.main-left-bottom');

    Zhengzhou.addEventListener('focus',function(){
        Zhengzhou.className = 'main-left main-left_1 LRborder';
        floating.className= 'main-left-bottom';
    });
    Zhengzhou.addEventListener('blur',function(){
        Zhengzhou.className = 'main-left  main-left_1';
        
        floating.className= 'main-left-bottom buttom';
    });

})();
(function(){
    var lis = document.querySelectorAll('.main-right .gds');
    var popup = document.querySelectorAll('header .main-right-hide');
    Array.from(lis).forEach(function(item, index ,lis){
        item.onmouseover = function(){
            popup[index].style.display = 'block';
        }
        item.onmouseout = function(){
            popup[index].style.display = 'none';
        }
    })

})();
(function(){
var left = document.querySelector('header .elect .left');
var right =document.querySelector('header .elect .right');
var area = document.querySelector('.area');
var cs =   document.querySelector('.cs');
left.style.borderTopColor = '#f10180';
left.addEventListener('click',function(){
    area.style.display = 'block';
    cs.style.display = 'none';
    this.style.borderTopColor = '#f10180';
    right.style.borderTopColor = '#ccc';
})
right.addEventListener('click',function(){
    area.style.display = 'none';
    cs.style.display = 'block';
    this.style.borderTopColor = '#f10180';
    left.style.borderTopColor = '#ccc';
})
   left.onclick=function(){
    area.style.display = 'block';
      cs.style.display = 'none';
   }
   right.onclick=function(){
    area.style.display = 'none';
      cs.style.display = 'block';
   }
})();(function(){
var tmj = document.querySelector('.tmj');

})();
(function(){
    var lis = document.querySelectorAll('.tooltip li');
    var img = document.querySelectorAll('.tooltip li img')
    Array.from(lis).forEach(function(item , index , lis){
        item.addEventListener('mouseover', function(){
            img[index].src = '图片/金钱红.png';
            item.style.backgroundColor = '#df147f';
        });
        for(var i = 0 ; i<lis.length ; i++){
            (function(i){
                lis[i].addEventListener('mouseout',function(){
                    img[i].src = '图片/金钱.png';
                    lis[i].style.backgroundColor = '#262626';   
                })
            })(i);
        }
    })
})();
(function(){
// 垃圾
})();
})