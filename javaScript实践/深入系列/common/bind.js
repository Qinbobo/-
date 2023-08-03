//手写bind()
Function.prototype.bind = function(context){
    //判定绑定（bind）的对象是否为函数
    if(typeof this !== "function"){
        throw new Error("Function.prototype.bind - what is trying to be bound is not callable")
    }
    const _this = this;
    //获取参数，从第二项开始
    let args = Array.prototype.slice.call(arguments, 1);

    const FNOP = function() {};
    const fBound = function(){
        //this指向的是绑定传入的第一个参数
        let bindArgs = Array.prototype.slice.call(arguments);
        return _this.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
    }
    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
}