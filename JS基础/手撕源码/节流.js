var throttle = function ( fn, interval ) {
    var __self = fn, // 成功触发时的回调函数
    timer,
    firstTime = true;

    return function () {
        var args = arguments;
        __me = this;
        //第一次传入
        if(firstTime) {
            __self.apply(__me, args);
            return firstTime = false;
        }
        //中间有你还传
        if(timer) { //这里对timer进行判断的时候会执行setTimeout
            console.log("sss")
            return false;
        }
        //延迟一段时间后执行

        // timer = null 不会取消定时器回调执行，clearTimeout 
        //  之后 timer 还会指向定时器实例，取消定时器 / 执行回调 -> 
        //  定时器实例会发生改变。然后你代入一下场景。
        timer = setTimeout(function() {
            clearTimeout(timer);//把还在排队的setTimeout阻止
            timer = null; // timer = null 后timer才会重新被赋值为新的计时器，因此前面的if(timer)此时不通过了 
            __self.apply(__me, args);
        }, interval || 1000)
    };
};

window.onscroll = throttle(function() {
    console.log(1)
})
