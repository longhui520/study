function parse(text,reviver){
    const myreviver = function(k,v){
        if(/^function/.test(v)){
            return new Function('return '+v);
        }else{
            return v;
        }
    }
    reviver = reviver || myreviver;
    return JSON.parse(text,myreviver);
}
function stringify(value,replacer,space){
    const myreplacer = function(k,v){
        if(typeof(v)==='function'){
            return v.toString();
        }else{
            return v;
        }
    }
    replacer = replacer || myreplacer;
    return JSON.stringify(value,replacer,space);
}
var a = {b:function(){console.log(1);}}
var b= stringify(a);
var d = parse(b);
