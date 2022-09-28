document.addEventListener('DOMContentLoaded',function(){
       
    
    var li = document.querySelectorAll('.star-2 ul li');
        Array.from(li).forEach(function(item,index){
            item.addEventListener('click',function(){
                for(var i = 0 ; i <=index ; i++){
                    li[i].style.color = 'yellow';
                }
                for(var i = index+1 ; i <li.length ; i++){
                    li[i].style.color = '';
                }
            })
        })
        var cm = document.querySelectorAll('.star-3 li');
        Array.from(cm).forEach(function(item,index){
            var flag = 0 ;
            item.addEventListener('click',function(){
                if(flag == 0 ){
                    item.style.backgroundColor = 'rgba(119, 114, 114, 0.605)';
                    return  flag = 1;
                }else {
                    item.style.backgroundColor = '';
                    flag = 0;
                }
            })
        })

        var fb = document.querySelector('.top-right');





})