/**
 * 节流函数
 * @param {Function} func 节流的函数
 * @param {Number} delay 节流的延迟时间
 */
function throlle(func,delay){
    const self = this;
    let tid = null;
    return function(...args){
        if(tid){return;}
        tid = setTimeout(()=>{
            func.call(self,...args);
            tid = null;
        },delay);
    }
}
/**
 * 防抖函数
 * @param {Function} func 防抖的函数
 * @param {Number} delay 防抖的延迟时间
 */
function debounce(func,delay){
    const self = this;
    let tid = null;
    return function(...args){
        if(tid){clearTimeout(tid)}
        tid = setTimeout(()=>{
            func.call(self,...args);
            tid = null;
        },delay)
    }
}

/**
 * 缓存包装函数
 * @param {Function} fucn 执行的函数
 */
function memorize(fucn){
    const cache = {};
    return function(...args){
        const key = JSON.stringify(args);
        if(cache[key]){
            return cache[key];
        }
        const result = func.call(this,...args);
        cache[key] = result;
        return result;
    }
}
