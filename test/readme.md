###判断用户浏览器，设备，系统类型
####使用示例
``` 
    // 判断是否是谷歌浏览器
    var b = new _$.Borwser();  
    if(b.chrome){
        console.log(b.version); // browser version
        console.log('is chrome browser');
    }
    // 判断设备类型
    var d = new _$.Device();
    if(d.android) {
        console.log('is android device');
    }
    // 判断操作系统
    var s = new _$.Os();
    if(s.win) {
        console.log('is windows os');
    }
```

没有做太细，浏览器具体版本、操作系统版本、设备版本以及一些其他移动浏览器