// 应用立即执行函数，封装cookie.js
(function (win) {

    win.cookie = win.$ = {
        setCookie: function (key, value, maxAge) {
            value = encodeURIComponent(value);
            if (maxAge) {
                document.cookie = `${key}=${value};max-age=${maxAge};`;
            } else {
                document.cookie = `${key}=${value};`;
            }
        },
        getCookie: function (key) {
            var arr = document.cookie.split(';');
            if (arr.length > 0) {
                for (let i = 0; i < arr.length; i++) {
                    const a = arr[i].split('=');//['name','dsh']
                    const k = a[0]
                    if (k === key) {
                        return decodeURIComponent(a[1]);
                    }
                }
            }
            return undefined;
        },
        removeCookie: function (key) {
            var value = this.getCookie(key);
            this.setCookie(key, value, -60000);
        },
        clearCookie: function () {
            // 找出来所有的key组成的数组  ['name','age']
            var arr = document.cookie.split(';');
            for (let i = 0; i < arr.length; i++) {
                const a = arr[i];
                this.removeCookie(a.split('=')[0]);
            }
        }
    };

}(window));