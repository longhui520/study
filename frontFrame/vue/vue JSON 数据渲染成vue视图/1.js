var a  = {
    b:function(){console.log(a)}
}
var b  = JSON.stringify(a,function(key,value){
   if(typeof value == 'function'){
       return '__fn__'+value.toString();
   }else{
       return value 
   }
})
console.log(b)
var c = JSON.parse(b,function(key,value){
    if(/^__fn__/.test(value)){
        var str = value.slice(6)
        return Function('"use strict";return (' + str + ')')();
    }else{
        return value
    }
})
console.log(c)
