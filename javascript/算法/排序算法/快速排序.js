function quick_sort(arr){
    if(arr.length<=1)return arr;
    var pivotIndex = Math.floor(arr.length / 2);
    var pivot = arr.splice(pivotIndex,1)[0];
    var left = [];
    var right = [];
    for(var i =0;i<arr.length;i++){
        if(arr[i]<pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return quick_sort(left).concat([pivot],quick_sort(right));
}
console.log(quick_sort([1,2,1,5,7,4]));