//常用功能函数
/**
 * 判断js数据的类型
 * @param {*} o 输入的任意数据类型
 */
function getType(o){
    var _toString = Object.prototype.toString;
    var _type = {
          'undefined'         : 'undefined',
          'number'            : 'number',
          'boolean'           : 'boolean',
          'string'            : 'string',
          '[object Function]' : 'function', 
          '[object Array]'    : 'array', 
          '[object Date]'     : 'date', 
          '[object RegExp]'   : 'regExp', 
          '[object Object]'   : 'object',
          '[object Error]'    : 'error'
    }
    return _type[typeof o] || _type[_toString.call(o)] || (o ?"object":"null");
}


// function getSafeReduce(data, keys, defaultValue) {
//     function isExist(data) {
//         return data !== undefined && data !== null;
//     }
//     function isNothing(data) {
//         return !isExist(data);
//     }
//     function isVaild(data) {
//         return typeof data === 'string' || typeof data === 'number';
//     }
//     if (isNothing(data)) {
//         return defaultValue || "";
//     }
//     data = isExist(data) ? data : {};
//     return isVaild(keys) &&  String(keys).split(",").reduce((item, key, i, arr) => {
//             let result = item[key.trim()];
//             result = isExist(result) ? result : ((i === arr.length - 1) ? defaultValue : {});
//             return result;
//         }, data);
// }
function reg_replace(regs,reps,str){
    regs.forEach(function(v,i){
        str = str.replace(v,reps[i]);
    });
    return str;
}
var str = '#a##a#2222#b#';
var regs = [/#a#/gm,/#b#/gm];
var reps = ['fa','fb'];
console.log(reg_replace(regs,reps,str));