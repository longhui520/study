// import { transform } from '@babel/core';
// import * as babel from '@babel/core';
// var transform = require('@babel/core').transform;
var babel  = require('@babel/core')
babel.transform(`async function test2(){
    var b  = await get('a') || await get('b')
    return b 
}`, null, function(err, result) {
    console.log(result)
  });