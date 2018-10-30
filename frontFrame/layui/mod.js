function hello(str){
    alert('Hello'+(str||'mymode'));
}
layui.define(function(exports){
    var obj={
        hello:hello
    };
    exports('mod',obj);
})