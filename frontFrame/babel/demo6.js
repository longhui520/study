// var arr = [
//     {
//         a:1,
//         b:2
//         },
//     {
//         a:11,
//         b:22
//     } 
// ]
// var obj = arr.reduce(function(obj,e){
//     return {...obj,[e.a]:e};
// },{});
// console.log(obj);


var arr = [1,2,3,4];
arr.map(function(e){return new Promise(function(resolve){setTimeout(function(){
    console.log(e);
    resolve(e);
},1500)});}).reduce(function(p,e){
    return p.then(function(data){
        return e.then(function(obj){
            return [...data,obj];
        });
    })
},Promise.resolve([])).then(function(data){
    console.log(data);
})