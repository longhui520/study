function timeout(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  
  async function asyncPrint(value, ms) {
    var vv = await timeout(ms);
    console.log(vv);
  }
  
  asyncPrint('hello world', 50);
  async function getTitle(url){
    let response = await fetch(url);
    
    let html = await response.text();
    console.log(html);
    console.log(1);
    return html.match(/<title>([\s\S]+)<\/title>/i)[1];

}    
getTitle('https://tc39.github.io/ecma262/').then(console.log);