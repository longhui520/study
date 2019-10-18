//函数节流是让某些代码可以在间断的情况下，连续重复执行
var processor={
    timeId:null,
    performProcessing:function(){
        //业务代码
    },
    process:function(){
        clearTimeout(this.timeId);
        var that=this
        this.timeId=setTimeout(function(){that.performProcessing();},100)
    }
}
processor.process()
//简写
// function throttle(method,context){
//     clearTimeout(method.id);
//     method.id=setTimeout(function(){method.call(context)})
// }
