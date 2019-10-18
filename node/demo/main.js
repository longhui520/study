const fs = require('fs');
const data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log('打印完毕');
console.log(__dirname);