var form = document.querySelector('form');//form表单
var zh = document.querySelector('#zh');//账号
var sjh = document.querySelector('#sjh');//手机号
var mm = document.querySelector('#mm');//密码
var zc = document.querySelector('.main4');//注册

var p1 = document.querySelector('.main3 .box1');
var p2 = document.querySelector('.a1');
var p3 = document.querySelector('.a2');
form.onsubmit = function(e){
 e.preventDefault();
    var phoneReg = /^[a-zA-Z0-9_]{6,15}/;
    if(!phoneReg.test(zh.value)){
        p1.innerHTML = '账号格式不对';
    }else{
        p1.innerHTML = '账号正确';
    }
    var phoneReg = /^1[3-9][0-9]{9}$/;
    if(!phoneReg.test(sjh.value)){
        p2.innerHTML = '手机号有误';
    }else{
        p2.innerHTML = '账号正确';
    }
    var pwdReg = /^[a-zA-Z0-9_]{6,12}$/;
    if(!pwdReg.test(mm.value)){
        p3.innerHTML = '请输入正确的密码,包含数字,字母,下划线,长度在6-12之间';
    }else{
        p3.innerHTML = '账号正确';
    }
    if(phoneReg.test(zh.value)|| phoneReg.test(sjh.value) && pwdReg.test(mm.value)){
        zc.onclick = function(e){
            e.preventDefault();
            location.href = "https://www.baidu.com/";
            console.log('你真是个小可爱');  
        }
    }

}
var cc = document.querySelector('.main3 .cc')
sjh.onfocus = function(){
p2.style.display = 'inline-block';
cc.style.display = 'block';

}
sjh.onblur = function(){
    p2.innerHTML = '';
    p2.style.display = 'none';
    cc.style.display = 'none';
    }

    var rr = document.querySelector('.main3 .aa')
    zh.onfocus = function(){
p1.style.display = 'inline-block';
rr.style.display = 'block';

}
zh.onblur = function(){
    p1.innerHTML = '';
    p1.style.display = 'none';
    rr.style.display = 'none';
    }
    var gg = document.querySelector('.main3 .gg')
    mm.onfocus = function(){
p3.style.display = 'inline-block';
gg.style.display = 'block';

}
mm.onblur = function(){
    p3.innerHTML = '';
    p3.style.display = 'none';
    gg.style.display = 'none';
    }