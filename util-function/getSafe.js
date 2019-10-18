function getSafe(data, keys, defaultValue) {
    function isExist(data) {
        return data !== undefined && data !== null;
    }
    function isNothing(data) {
        return !isExist(data);
    }
    function isVaild(data) {
        return typeof data === 'string' || typeof data === 'number';
    }
    if (isNothing(data)) {
        return defaultValue || "";
    }
    data = isExist(data) ? data : {};
    return isVaild(keys) &&  String(keys).split(".").reduce(function(item, key, i, arr){
            var result = item[key.trim()];
            result = isExist(result) ? result : ((i === arr.length - 1) ? defaultValue : {});
            return result;
        }, data);
}
var a=1;
console.log(getSafe(a,'b.c',false));