function timeout(ms){
    return new Promise((resolve)=>{
        setTimeout(resolve,ms,ms);
    })
}
async function aa(){
    var str = "aaaa";
    var tt = await str.replace(/a/g,async function(m){
        var  bb = await timeout(100);
        console.log(bb);
      return bb
    });
    console.log(tt)
    // tt.then(a=>console.log(a));
    // for( i in [100,300,100,500]){
    //     let v = await timeout(i)
    //     console.log(v)
    // }
}
aa();
  
