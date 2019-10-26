// 1.布尔全等判断
const all = (arr,fn=Boolean)=>arr.every(fn);
console.log(all([1,2,0]));
console.log(all([1,2,1]));

//2. 检查数组各项相等

const allEqual = arr=>arr.every(val=>val===arr[0]);
console.log(allEqual([1,2,3]));
console.log(allEqual([1,1,1]));

//3 约等于
const approximatelyEqual = (v1,v2,epsilon=0.0001)=>Math.abs(v1-v2)<epsilon;
console.log(approximatelyEqual(Math.pi,3.1415926));

//4 数组转csv

const arrayToCSV = (arr,delimiter=", ")=>
  arr.map(v=>v.map(x=>`${x}`).join(delimiter)).join('\n');
console.log(arrayToCSV([['a','b'],['c','d']]));

//5. 数组转li列表
const arrayToHtmlList = (arr,listID)=>
  (el=>(
      (el = document.querySelector('#'+listID)),
      (el.innerHTML = arr.map(item=>`<li>${item}</li>`)).join('')
  ))();

//6. 平均数

const average = (arr)=>arr.reduce((a,b)=>a+b,0)/arr.length;
console.log(average([1,2,3]));

//7. 数组对象属性平均数
const averageBy = (arr,fn)=>arr.map(typeof fn ==='function'?fn:val,val=>val[fn]).reduce((acc,val)=>acc+val,0)/arr.length;
console.log(averageBy([{n:4},{n:2}],obj=>obj.n));

// 8.拆分断言分组
const bifurcate = (arr,filter)=>arr.reduce((acc,val,i)=>(acc[filter[i]?0:1].push(val),acc),[[],[]]);
console.log(bifurcate([1,2,3],[false,false,true]));

const b = ()=>(1,2);
console.log(b());
//9.其他类型转数组
const castArray = val=>(Array.isArray(val)?val:[val]);

//10.过滤数组中无效的值
const compact = arr=>arr.filter(Boolean)

//11 检测某项值出现次数
const countOccurences = (arr,val)=>arr.reduce((acc,v)=>v===val?acc++:acc,0);

//12递归扁平化数组

const deepFlatten = arr=>[].concat(...arr.map(v=>(Array.isArray(v)?deepFlatten(v):v)))

//13寻找差异

const diffrence  = (a,b)=>{
    const s = new set(b);
    return a.filter(x=>!s.has(x));
}
//14,转化对象后比较差异

const diffrenceBy = (a,b,fn)=>{
    const s = new set(b.map(fn));
    return a.filter(x=>!s.has(fn(x)));
}
//15 删除不符合条件的值,直到某项正确时停止

const dropWhile = (arr,func)=>{
    while(arr.length>0 && !func(arr[0])) arr = arr.slice(1);
    return arr;
}
// 16 指定遍历深度的扁平化

const flatten = (arr,depth=1)=>arr.reduce((a,v)=>a.concat(depth>1&&Array.isArray(v)?flatten(v,depth-1):v),[]);