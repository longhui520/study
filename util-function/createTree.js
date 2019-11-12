var dataArray = [
    {
        id:1,
        pid:0,
        name:'11'
    },
    {
        id:2,
        pid:1,
        name:222
    },
    {
        id:3,
        pid:2,
        name:2222
    },
    {
        id:4,
        pid:3,
        name:2222222
    }
]
function toTree(arr,pid='pid',id='id'){
    var arr = [...arr];
    var tree = [];
    for(var i = 0;i<arr.length;i++){
        if(arr[i][pid]== 0){
            tree.push(arr[i]);
            arr.splice(i,1);
            i=i-1;
        }
    }
    getchild(arr,tree,pid,id);
    return tree;
}
function getchild(arr,mapArr,pid,id){
    if(arr.length==0 || !mapArr){return;}
    for(var j=0,len=mapArr.length;j<len;j++){
        mapArr[j].children = [];
        for(var i=0;i<arr.length;i++){
            if(arr[i][pid]== mapArr[j][id]){
                mapArr[j].children.push(arr[i]);
                arr.splice(i,1);
                i = i -1;
            }
        }
        if(mapArr[j].length==0){
            delete mapArr[j].children;
        }
        getchild(arr,mapArr[j].children,pid,id);
    }
   
}
console.log(JSON.stringify(toTree(dataArray)))