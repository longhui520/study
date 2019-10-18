function insert_sort(arr){
    var oarr = [arr[0]];
    var n = arr.length;
    for(var i=1;i<n;i++){
        for(var j =0;j<i;j++){
            if(arr[i]<=oarr[j]){
                oarr.splice(j,0,arr[i]);
                break;
            }else if(j === i-1){
                oarr.push(arr[i]);
            }
        }
    }
    return oarr;
}
console.log(insert_sort([5,4,6,2,3]));