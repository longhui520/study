// 避免递归遍历寻找值问题

var data = [{
    id: 1,
    value: 2
}, {
    id: 2,
    value: 3,
    child: [{
        id: 10,
        value: 11,
        child: [{
            id: 111,
            value: 222
        }]
    }]
}];

//用于查找递归树;
function searchTree(list,key,value) {
    let loopList = [];
    let target = null;
	let _toString = Object.prototype.toString;
	if(list && _toString.call(list)=== '[object Object]'){
		if(list[key] === value){
			target = list;
			return target;
		}else{
			loopList = [list.child||[]];
		}
	}
	else if(_toString.call(list)==='[object Array]'){
		loopList = [list];
	}else{
		return target;
	}
    while (loopList.length && !target) {
        let node = loopList.pop();
        for (let i = 0; i < node.length; i++) {
            if (node[i][key] === value) {
                target = node[i];
                break;
            }
            if (node[i].child && node[i].child.length > 0) {
                loopList.push(node[i].child);
            }
        }
    }
    return target;
}
function getNodes(list,fn){
	let loopList = [];
	let result = [];
	let childKey='child';
	let _toString = Object.prototype.toString;
	if(list && _toString.call(list)=== '[object Object]'){
		if(fn(list)){
			result.push(list);
		}
		loopList = [list[childKey]||[]];
	}
	else if(_toString.call(list)==='[object Array]'){
		loopList = [list];
	}else{
		return result;
	}
	while (loopList.length) {
	    let node = loopList.pop();
	    for (let i = 0; i < node.length; i++) {
	        if (fn(node[i])) {
	            result.push(node[i]);
	        }
	        if (node[i][childKey] && node[i][childKey].length > 0) {
	            loopList.push(node[i][childKey]);
	        }
	    }
	}
	return result;
}
var data2 = [
    {
        id:1,
        parentId:0
    },
    {
        id:11,
        parentId:1
    },
    {
        id:12,
        parentId:1
    },
    {
        id:111,
        parentId:11
    },
    {
        id:112,
        parentId:11
    }
];
var data3 = [{id:1,parentId:0}];
var getchild = function getchild(data,id){
    var result = [];
    for(var i=0;i<data.length;i++){
        if(data[i].parentId == id ){
            result.push(Object.assign({},data[i],{child:getchild(data,data[i].id)}));
        }
    }
    return result;
}
console.log(getchild(data2,1));
 

//23中设计模式 领域驱动 
// console.log(getNodes(data,(node)=>true));
// console.log(searchTree(data,'id',111));
// console.log(Object.prototype.toString.call)
