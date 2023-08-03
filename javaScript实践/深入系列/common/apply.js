//手写apply实现

Function.prototype.apply = function (contexts, arr) {
    let context = Object(contexts) || window;
    context.fn = this;

    let result;
    if (!arr) {
        result = context.fn();
    } else {
        let args = [];
        for (let i = 0, len = arr.length; i < len; i++) {
            args.push('arr[' + i + ']');
        }
        result = eval('context.fn(' + args + ')');
    }

    delete context.fn;
    return result;
}

