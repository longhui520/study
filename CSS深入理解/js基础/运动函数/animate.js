// 多个属性运动函数，添加回调函数
//obj：运动的对象
//json：运动终点时对象的属性的json对象
//fn:运动结束后的回调函数
function animate(obj, json, fn) {
    clearInterval(obj.timer)
    obj.timer = setInterval(function () {
        var flag = true //动画是否全部变化完成的状态，用来判断是否清除定时器
        for (var key in json) {
            var current = 0
            if (key == "opacity") {
                current = parseInt(getStyle(obj, key) * 100)
            }else {
                current = parseInt(getStyle(obj, key))
            }
            var step = (json[key] - current) / 10
            step = step > 0 ? Math.ceil(step) : Math.floor(step)
            if (key == "opacity") {
                if ("opacity" in obj.style) {
                    obj.style.opacity = (current + step) / 100
                } else {
                    obj.style.filter = "alpha(opacity=" + (current + step) + ")"
                }
            } else if (key == "zIndex") {
                obj.style.zIndex = json[key]
            } else {
                obj.style[key] = current + step + 'px'
            }
            if (current != json[key]) {
                flag = false
            }
        }
        if (flag) {
            clearInterval(obj.timer)
            if (fn) {
                fn()
            }
        }
    }, 10)

}
function getStyle(obj, attr) {
    return obj.currentStyle ? obj.currentStyle[attr] : window.getComputedStyle(obj, null)[attr]
}