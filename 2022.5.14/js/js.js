var cont = 0;
function number(){
    // console.log(arguments);
    for(var i=1;i<=arguments[0];i++){
        cont +=i;
    }
    return cont;
}

function num(n){
    if(n < 2){
        alert('不是质数');
        return
    }else{
        for(var i = 2;i < n; i++){
            if(n % i == 0){
              return  alert('不是质数');
            }
        }
    }
    return alert("是质数!");
    
}