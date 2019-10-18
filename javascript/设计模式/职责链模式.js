function Chain(fn){
    this.fn = fn;
    this.successor =null;
}
Chain.prototype.setNextSuccessor = function (successor) {
    return this.successor = successor;
}
Chain.prototype.passRequest = function (){
    var ret  = this.fn.apply(this,arguments);
    if(ret === true){
       return this.successor &&this.successor.passRequest.apply(this.successor,arguments);
    }
    return ret;
}
var order1 =function (type) {
    if(type>100){
        console.log(100);
    }else{
        return true;
    }
}
var order2 =function (type) {
    if(type>10){
        console.log(10);
    }else{
        return true;
    }
}
var order3 =function (type) {
    if(type>1){
        console.log(1);
    }else{
        return true;
    }
}
// var chain1 = new Chain(order1);
// var chain2 = new Chain(order2);
// var chain3 = new Chain(order3);
// chain1.setNextSuccessor(chain2);
// chain2.setNextSuccessor(chain3);
// chain1.passRequest(22);
// chain1.passRequest(10);
// chain1.passRequest(1);
Function.prototype.after=function (fn) {
    var self = this;
    return function(){
        var ret = self.apply(this,arguments);
        if(ret){
            return fn.apply(this,arguments);
        }
    }
}

var order = order1.after(order2).after(order3);
order(12);
