// 订阅发布事件类
function EventEmit(){
    this.callbacks={}
}
EventEmit.prototype.on=function(eventName,fn){
    if(!this.callbacks[eventName]){
        this.callbacks[eventName]=[]
    }
    this.callbacks[eventName].push(fn)
}
EventEmit.prototype.emit=function(eventName){
    if(!this.callbacks[eventName]){
        console.log('请先注册此事件')
        return
    }
    this.callbacks[eventName].forEach(fn => {
        fn()
    });
}


function View(options){
   let {el,data}=options
   //继承
   EventEmit.call(this)
   this.$el=document.querySelector(el)
   this.$data=data
   for(let key in this.$data){
        Object.defineProperty(this,key,{
            get(){
                return this.$data[key]
            },
            set(value){
                this.$data[key]=value
                this.emit(key)
            }
        })
   }
   this.compile(this.$el.childNodes)
}
(function(){
    var Super = function(){};
    Super.prototype = EventEmit.prototype;
    View.prototype = new EventEmit();
})()
View.prototype.constructor=View
View.prototype.compile=function(childNodes){
    childNodes.forEach(node => {
        switch(node.nodeType){
            case 1:
            if(node.nodeName==="INPUT"){
                let vModel=node.attributes['v-model']
                if(!vModel){
                    return
                }
                let datakey=vModel.value.trim()
                node.value=this.$data[datakey]
                node.oninput=()=>{
                    this[datakey]=node.value
                }
            }
            this.compile(node.childNodes)
            break
            case 3:
            let matches=/{{(.+)}}/.exec(node.textContent)
            if(matches){
                let  datakey=matches[1].trim()
                node.textContent=this.$data[datakey]
                this.on(datakey,()=>{
                    node.textContent=this.$data[datakey]
                })
            }
             
        }
    })
}

