// 解析Url路径
function splitUrl(url){
    var s1 = url.split("?")[1];
    var arr = s1.split("&");
    var obj = {};
    for(var i=0; i<arr.length; i++){
        var s2 = arr[i].split("=");
        obj[s2[0]] = s2[1];
    }
    return obj;
}
