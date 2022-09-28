document.addEventListener('DOMContentLoaded', function () {
   (function () {

      var b=document.querySelector('b');
      var btnBoxbtn=document.querySelectorAll('.btnBox button');
      var ins=document.querySelectorAll('ins');
      var h4=document.querySelector('h4');
      var a=1;
      var jinxian = document.querySelector('.jinxian');
      btnBoxbtn[0].onclick=function(){
          a--;
          if(a<=1){
              a=1;
  
          }
          b.innerText=a;
          
          ins[0].innerText=a*3699/3;
          ins[1].innerText=a*3699/6;
          ins[2].innerText=a*3699/12;
          ins[3].innerText=a*3699/24;
          h4.innerText=a*3699;
          if(a<5){
            jinxian.style.color = '#868686';
          }
      };
      btnBoxbtn[1].onclick=function(){
          a++;
          if(a>=5){
              a=5;
          }
          b.innerText=a;
          ins[0].innerText=a*3699/3;
          ins[1].innerText=a*3699/6;
          ins[2].innerText=a*3699/12;
          ins[3].innerText=a*3699/24;
          h4.innerText=a*3699;
          if(a == 5){
            jinxian.style.color = 'red';
          }


      }










      // <!-- 定位 -->
      // 开始
      var location = document.querySelector('.location');
      var main = document.querySelector('.main');
      // img4 外部引用
      var img4= document.querySelectorAll('.img4');
      for(var i = 0 ; i <imgBottom.length ; i++){
         img4[i].setAttribute('data-src',imgBottom[i]);
         // img4[i].src = imgBottom[i];
      }
         //懒加载
      window.addEventListener('scroll',function(){
Array.from(img4).forEach(function(item,index){
               //滚动高度
   var topXX = document.documentElement.scrollTop || document.body.scrollTop; 
               //窗口高度
               var h = window.innerHeight;
//图片到头部的高度
   var toptop = img4[index].offsetTop ;
   if ( topXX + h > toptop - img4[index].offsetHeight ) {
      item.src = item.dataset.src;
      // console.log(item.src);
  }

})
// 懒加载结束

      })
      window.onscroll = function () {
         var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
         var offset = main.offsetTop;
         // console.log(main.offsetHeight)
         var bottomX = offset + main.offsetHeight - location.offsetHeight;
         if (scrollTop >= offset && scrollTop <= bottomX) {
            location.style.position = 'fixed';
            location.style.top = '0px';
         } else if (scrollTop < offset) {
            location.style.position = 'absolute';
            location.style.top = '0px';
         } else if (scrollTop > bottomX) {
            location.style.position = 'absolute';
            location.style.top = bottomX - offset + 'px';
         };





      }
      // <!-- 轮播图 -->
      var imgD = document.querySelectorAll('.location_1 li img');
      var imgX = document.querySelectorAll('.location_2 li img')
      //  外部引用图片路径 
      for (var i = 0; i < picture.length; i++) {
         console.log(picture[i].imgSrc[0]);
         // 大图
         imgD[i].setAttribute('data-src', picture[i].imgSrc[0]);
         imgD[i].src = picture[i].imgSrc[0];
         // 小图
         imgX[i].setAttribute('data-src', picture[i].imgSrc[1]);
         imgX[i].src = picture[i].imgSrc[1];
      }
      //按钮点击事件
      var btnleft = document.querySelector('.location_2_left');
      var btnright = document.querySelector('.location_2_right');
      var ulMin = document.querySelector('.location_2');
      var ulMax = document.querySelector('.location_1');
      btnleft.onclick = function () {
         if (ulMin.style.left == '0px') {
            ulMin.style.left = '-85px';
         } else {
            ulMin.style.left = '-85px';
         }
      }
      btnright.onclick = function () {
         if (ulMin.style.left = '-85px') {
            ulMin.style.left = '0px';
         } else {
            ulMin.style.left = '0px';
         }
      }
      var liMax = ulMax.children;
      var liMin = ulMin.children;
Array.from(liMin).forEach(function(item,index){
   item.addEventListener('mouseover',function(){
      for(var i = 0 ; i <liMin.length ; i++){
         liMax[i].style.zIndex = '0';
         liMax[i].style.opacity = '0';
      }
      liMax[index].style.zIndex = '1';
      liMax[index].style.opacity = '1';
      //这里515可以通过 获取高度加入
      ulMax.style.left = -index *515 +'px';
   })
})

//价格点击










   })();
})