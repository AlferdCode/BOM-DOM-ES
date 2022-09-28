document.addEventListener('DOMContentLoaded', function () {
    var qx = document.querySelector('.main-1-1 input');
    var xx = document.querySelectorAll('.box-1 input');
    var dx = document.querySelectorAll('.box-2-1 input');
    // 点全选 都选
    qx.onclick = function () {
        for (var i = 0; i < dx.length; i++) {
            dx[i].checked = this.checked;
            xx[i].checked = this.checked;
        }
    }
    //dx选择 xx 同步
    Array.from(dx).forEach(function (item, index) {
        item.onclick = function () {
            xx[index].checked = item.checked;
        }
    })
    //xx选择 dx 同步
    Array.from(xx).forEach(function (item, index) {
        item.onclick = function () {
            dx[index].checked = item.checked;
        }
    })
    //点dx单选 选完 qx全选chenked = true
    for (var i = 0; i < dx.length; i++) {
        dx[i].addEventListener('click', function () {
            var flag = true;
            for (var i = 0; i < dx.length; i++) {
                if (!dx[i].checked) {
                    flag = false;
                }
            }
            qx.checked = flag;
        }
        )
    }
    //点xx单选 选完 全选chenked = true
    for (var i = 0; i < dx.length; i++) {
        xx[i].addEventListener('click', function () {
            var flag = true;
            for (var i = 0; i < xx.length; i++) {
                if (!xx[i].checked) {
                    flag = false;
                }
            }
            qx.checked = flag;
        }
        )
    }




    
    //
    var jian = document.querySelectorAll('.box-2-4 .left');
    var jia = document.querySelectorAll('.box-2-4 .right');
    var sl = document.querySelectorAll('.box-2-4 span');
    var xj = document.querySelectorAll('.box-2-5 span');
    var dj = document.querySelectorAll('.box-2-3 span');
    var end = document.querySelector('.end-1-2');
    Array.from(jia).forEach(function (item, index) {
        item.addEventListener('click', function () {
            var shu = sl[index].innerHTML;
            shu = Number(shu) + 1;
            sl[index].innerHTML = shu;
                xj[index].innerHTML = dj[index].innerHTML * sl[index].innerHTML;
               for(var i = 0 ; i <xj.length ; i++){
                var max = xj[i].innerHTML
                max += Number(max)
                console.log(Number(max));
                end.innerHTML +=  max ;
               } 
        })
    })

    Array.from(jian).forEach(function (item, index) {
        item.addEventListener('click', function () {
            if (sl[index].innerHTML <= 1) {
                sl[index].innerHTML = 1;
            } else {
                sl[index].innerHTML -= 1;
            }
            xj[index].innerHTML = dj[index].innerHTML * sl[index].innerHTML;

            for(var i = 0 ; i< xj.length ; i++){
                var max = xj[i].innerHTML
                max += Number(max)
                end.innerHTML +=  max ;
            }
        })
    })




})