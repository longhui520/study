function makeInterator(array) {
    let nextIndex = 0
    return {
        next:function(){
            return nextIndex<array.length?{value:array[nextIndex++],done:false}:
                {vlaue:undefined,done:true}
        }
    }
}
var arr = ['111','222']
var it = makeInterator(arr)
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())