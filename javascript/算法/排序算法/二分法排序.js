function sort(arr){
    if(arr.length ==1){
        return arr;
    }
    var mid = arr.splice(Math.floor(arr.length/2),1);
    var leftArr = [];
    var rightArr = [];
    for(var i=0;i<arr.length;i++){
        if(arr[i]<=mid){
            leftArr.push(arr[i]);
        }else{
            rightArr.push(arr[i]);
        }
    }
    return sort(leftArr).concat(mid,sort(rightArr));
}