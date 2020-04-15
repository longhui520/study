var glob = require('glob');
var fs = require('fs');
var files = glob.sync('../jquery/**/*.html')
var strs=""
for(var i in files){
    var name = files[i].slice(3,files[i].lastIndexOf('/'))
    name = '@'+name;
    strs+= `    '${name}':()=>import('${name}')${i!=files.length-1?',\n':''}`;
}
var js = `
var map = {
${strs}
}
module.exports=map
`
fs.writeFileSync('./2.js',js,'utf8')
var map = require('./2.js')
console.log(map)