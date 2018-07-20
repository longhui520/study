(function(window){
    var m={}
    // 通过id选择DOM元素
    m.byId=function(id){
        return document.getElementById(id)
    }
    // 清除字符串头尾的空格
    m.trim=function(str){
        if(String.prototype.trim){
            return str==null?"":String.prototype.trim.call(str)
        }else{
        return str.replace(/(^\s*)|(\s*$)/g,"")
        }
    }
    // 清除字符串中的空格
    m.trimAll=function(str){
    return str.replace(/\s*/g,"")
    }
    //判断是否为标签
    m.isElement=function(obj){
        return !!(obj && obj.nodeType==1)
    }
    //设置元素的html
    m.html=function(el,text){
        el.innerHTML=text
    }
    window.m=m
})(window)