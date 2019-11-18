function broadcast (componentName,eventName,params){
    this.$childrens.forEach(child => {
        const name = child.$options.name
        if(name === componentName){
            child.$emit.apply(child,[eventName].concat(params))
        }else{
            broadcast.apply(child,[componentName,eventName].concat(params))
        }
    });
}
let methods = {
    dispatch:function(componentName,eventName,params){
        var parent  = this.$parent ||this.$root
        var name = parent.$options.name
        while(parent && !(!name && componentName !== name)){
            parent = parent.$parent
            if(parent){
                name = parent.$options.name
            }
        }
        if(parent){
            parent.$emit(parent,[eventName].concat(params))
        }
    },
    broadcast:function(componentName,eventName,params){
        broadcast.apply(this,[componentName,eventName].concat(params))
    }
}