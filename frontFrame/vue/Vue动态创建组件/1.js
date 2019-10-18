function serialize(obj, name){
    var result = "";
    function serializeInternal(o, path) {
        for (p in o) {
            var value = o[p];
            if (typeof value != "object") {
                if (typeof value == "string") {
                    result += "\n" + path + "[" + (isNaN(p)?"\""+p+"\"":p) + "] = " + "\"" + value.replace(/\"/g,"\\\"") + "\""+";";
                }else {
                    result += "\n" + path + "[" + (isNaN(p)?"\""+p+"\"":p) + "] = " + value+";";
                }
            }
            else {
                if (value instanceof Array) {
                    result += "\n" + path +"[" + (isNaN(p)?"\""+p+"\"":p) + "]"+"="+"new Array();";
                    serializeInternal(value, path + "[" + (isNaN(p)?"\""+p+"\"":p) + "]");
                } else {
                    result += "\n" + path  + "[" + (isNaN(p)?"\""+p+"\"":p) + "]"+"="+"new Object();";
                    serializeInternal(value, path +"[" + (isNaN(p)?"\""+p+"\"":p) + "]");
                }
            }
        }
    }
    serializeInternal(obj, name);
    return result;
}

function A(){
    this.name="A";
    this.arr=new Array();
    this.put=function(para){
        this.arr[this.arr.length]=para;
    }
}
function B(){
    this.name="B";
    this.show="";
}
 
var a = new A();
 
var b=new B();
b.show=function(){
    alert("function 1");
}
 
var b2=new B();
b2.show=function(){
    alert("function 2");
}
 
a.put(b);
a.put(b2);
var d  = serialize({a:{b:1}},"a");
console.log(eval(d));


