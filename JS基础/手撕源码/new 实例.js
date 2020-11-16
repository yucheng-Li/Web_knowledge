var objectFactory = function () {
    // 1. 创建一个空对象
    var obj = new Object();
    // 2. 从外部传入构造器
    Constructor = [].shift.call(arguments);
    // 3. 指向正确的原型
    obj.__proto__ = Constructor.prototype;
    // 4. 改变构造函数的this的指向,也就是给实例设置属性和方法
    var res = Constructor.apply(obj, arguments);
    // 5. 确保构造函数总会返回一个对象
    return typeof res === 'object' ? res : obj;
}