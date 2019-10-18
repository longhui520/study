function EventEmit(){
    // 事件集合对象
    this.callbacks={}
}
// 注册对象
EventEmit.prototype.on=function(eventName,fn){
    if(!this.callbacks[eventName]){
        this.callbacks[eventName]=[]
    }
    this.callbacks[eventName].push(fn)
}
//触发对象
EventEmit.prototype.emit=function(eventName){
    if(!this.callbacks[eventName]){
        console.log('请先注册此事件')
        return
    }
    this.callbacks[eventName].forEach(fn => {
        fn()
    });
}
// el=new EventEmit()
// el.on('a',function(){
//     console.log('1')
// })
// el.on('a',function(){
//     console.log('2')
// })
// el.on('a',function(){
//     console.log('3')
// })
// el.emit('a')
