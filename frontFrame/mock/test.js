var Mock = require('mockjs');
var data = Mock.mock({
    'list|1-10':[{
        'id|1':Array(10).map(function(){return Mock.Random.date();})
    }]
});
console.log(JSON.stringify(data,null,4));