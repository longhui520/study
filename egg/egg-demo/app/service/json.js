const Service = require('egg').Service;
class JsonService extends Service {
  async getJson(){
    const {ctx} = this;
    const token = 'YTozOntzOjM6InB3ZCI7czozMjoiNDFiZDUwMzEwNTI5NTliOWE5ZjBlNTQyYzgzZmYwMzYiO3M6NDoidXNlciI7czo1OiJhZG1pbiI7czo1OiJvcmRlciI7czoxOiIxIjt9'
    const params = ctx.request.body
    params.action = params.nodeNames;
    params.method = 'getAppJson';
    const host = 'http://localhost/Admin/index.php'
    const result = await ctx.curl(`${host}/${params.action}/${params.method}`, {
      dataType: 'json',
      method:'GET',
      headers:{
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
        'token':token,
      },
      timeout: 100000,
    });
    ctx.helper.writeJson2({action:params.action,json:result.data.data})
    // param.updateTime = new Date()
    // ctx.helper.writeJson(param)
  }
}
module.exports = JsonService;