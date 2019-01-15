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
    return _type[typeof o] || _type[_toString.call(0)] || (o ?"object":"null");
}
