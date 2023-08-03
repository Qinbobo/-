//模拟实现call函数

Function.prototype.call = function (contexts) {
    //this指向是调用call函数的对象
    console.log(arguments)
    let context = contexts || window;
    context.fn = this;

    let args = [];
    for (let i = 1, len = arguments.length; i < len; i++) {
        args.push('arguments[' + i + ']')
    }

    let result = eval('context.fn(' + args + ')');
    delete context.fn;
    return result;
}