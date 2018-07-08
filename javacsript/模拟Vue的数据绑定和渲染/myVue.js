;(function(){
    function MyVue(options){
        var {el,data}=options
        //根节点
        var rootEl=document.querySelector(el)
        var _data={}
        var _events=new EventEmit()
        for(let key in data){
            _data[key]=data[key]
            //为实例添加具有get和set的属性
            Object.defineProperty(this,key,{
                get(){
                    return _data[key]
                },
                set(val){
                    _data[key]=val
                    _events.emit(key)
                }
            })
        }
        // 内部编译函数
        function compile(childNodes){
            childNodes.forEach((node,index) => {
                switch(node.nodeType){
                    //1为标签节点
                    case 1:
                        
                        if(node.nodeName==='INPUT'){
                            const vModel=node.attributes['v-model']
                            if(!vModel){
                                return
                            }
                            //获取数据名
                            var datakey=vModel.value.trim()
                            node.value=_data[datakey]
                            node.oninput=()=>{
                                this[datakey]=node.value
                            }
                        }   
                        compile.call(this,node.childNodes)
                        break
                    //文本节点    
                    case 3:
                        var matches=/{{(.+)}}/.exec(node.textContent)
                        if(matches){
                            var datakey=matches[1].trim()
                            node.textContent=_data[datakey]
                            _events.on(datakey,()=>{
                                node.textContent=_data[datakey]
                            })
                        }
                        break
                }
            })
        }
        compile.call(this,rootEl.childNodes)
    }
    window.MyVue=MyVue
})(window)