var fs = require('fs');
module.exports = {
    writeJson(params){
        fs.readFile('app/person.json',function(err,data){
            if(err){
                return console.error(err);
            }
            var person = data.toString();
            person = JSON.parse(person);
            person.data.push(params);
            person.total = person.data.length;
            console.log(person.data);
            var str = JSON.stringify(person);
            fs.writeFile('app/person.json',str,function(err){
                if(err){
                    console.error(err);
                }
                console.log('----------新增成功-------------');
            })
        })
    },
    writeJson2(data){
        fs.mkdir(`app/public/${data.action}`, {
            recursive: true  
          }, (err) => {
            if(err){
              console.log(err);
              return;
            }
            console.log(err)
            fs.writeFile(`app/public/${data.action}/proper.json`,data.json,(err)=>{
                console.log(err)
            })
          });
    }
  };