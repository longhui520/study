function defineReactive(obj,key,val){
    var dep = new Dep();
    Object.defineProperty(obj,key,{
        enumerable:true,
        configurable:true,
        get:function ReactiveGetter(){
            dep.addSub(Dep.target)
            return val;
        },
        set:function ReactiveSetter(newVal){
            if(newVal === val){return}
            dep.notify();
        }
    })
}
function observer(value){
    if(!value || typeof value !='object'){return;}
    Object.keys(value).forEach(function(key){
        defineReactive(value,key,value[key])
    })
}
class Dep{
    constructor(){
        this.subs = []
    }
    addSub(obj){
        this.subs.push(obj);
    }
    notify(){
        this.subs.forEach(sub=>{
            sub.update();
        })
    }
}
Dep.target = null;
class Watch{
    constructor(){
        Dep.target = this
    }
    update(){
        console.log('视图更新了')
    }
}
class Vue{
    constructor(options){
        this._data = options.data;
        observer(this._data);
        new Watch();
        console.log('render~', this._data.test); 
        console.log('render~', this._data.test);
    }
}
let o = new Vue({
    data:{
        test:111111
    }
});
o._data.test = 22222;



function n(str,value){
    var obj = {};
    var r = obj;
    var  part = str.split(',');
    for(var i=0;i<part.length;i++){
        if(i==part.length-1){
            obj[part[i]]= value;
        }else{
            obj[part[i]]={};
            obj = obj[part[i]];
        }      
    }
    return r;
}
console.log(n('a,b',1));
