function compose(...fns){
    let i = 0;
    return function(...args){
        let result = fns[i].apply(this,args);
        while(fns[i+1]){
            result = fns[i+1].apply(this,Array.of(result));
            i++;
        }
        return result;
    }
}
function add4(a,b){
    return a+b+4;
}
function mulit4(x){
    return x*4;
}
var add4_multi4 = compose(add4,mulit4);
console.log(add4_multi4(1,2));