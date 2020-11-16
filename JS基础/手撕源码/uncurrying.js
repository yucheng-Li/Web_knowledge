Function.prototype.uncurrying = function() {
    var self = this; //谁引用this就是谁
    return function() {
        var obj = Array.prototype.shift.call(arguments); // 把要操作的对象拿出来，这是一种常见的做法
        return self.apply(obj, arguments); // 这步是 this泛化的关键
    }
}

var push = Array.prototype.push.uncurrying();
var obj = {
    "length":1,
    "0":1
};

push(obj, 2);
console.log(obj)