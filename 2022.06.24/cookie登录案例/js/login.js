var btnLogin = document.querySelector('#btnLogin');
btnLogin.addEventListener('click',function(){
    // 校验数据
    var acc = document.querySelector('#acc');
    var pwd = document.querySelector('#pwd');

    if(acc.value.length == 0 || pwd.value.length == 0){
        alert('输入内容不能为空');
        return;
    };

    // 判断账号密码是否正确
    if(!(acc.value == 'admin' && pwd.value == '123456')){
        alert('账号或密码错误');
        return;
    }

    // 储存账号信息 (不要存储密码，cookie不安全)。
    $.setCookie('account',acc.value);
    location.href = './index.html'

})