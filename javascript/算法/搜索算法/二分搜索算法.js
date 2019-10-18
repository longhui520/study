function er(arr,target){
    var start  = 0 ;
    var end = arr.length-1;
    var mid = Math.floor(start+(end-start)/2);
    while(start<end){
        if(arr[mid]<target){
            start = mid+1;
        }else{
            end = mid;
        }
        mid = Math.floor(start+(end-start)/2);
    }
    return start;
}
console.log(er([1,2,3,4,5],3));