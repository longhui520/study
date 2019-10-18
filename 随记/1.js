var Saoma = {
    /**
     * 打开扫码界面
     * @param{Object}opt 打开扫码页面的参数配置
     * @param{String}opt.url 扫码页面的地址,不能为空
     * @param{String}opt.id 扫码页面的id
     * @param{Object}opt.data 打开扫码页面发送的参数
     * @param{Function}opt.callback 接收扫码页面返回的数据的回调函数
     */
    open:function open(opt){
        if(typeof(plus)=='undefined'){
            console.error("请在手机app环境下使用");
            return;
        }
        if(typeof(opt)!=='object'){
            return;
        }
        if(opt.url==false){
            return;
        }
        var defaults = {
            url:"",
            id:"",
            data:{},
            callback:function(e){console.log(e);}
        }
        var options = Object.assign(defaults,opt);
        var token = String(new Date().getTime()) + Math.random().toString(32).slice(2);
        mui.openWindow({
            url: options.url, 
            id:optionss.id || options.url,
            extras:{
                token:token,
                data:data
            },
            createNew:false,
            show:{
                autoShow:true
            },
            waiting:{
                autoShow:true,
                title:'正在加载...'
            }
          });
          window.addEventListener(token, function (e) {
            options.callback(e);
        });  
    },
    /**
     * 扫码页面发送结果
     * @param{Object}data 返回的数据
     */
    sendResult:function sendResult(data){
        if(typeof(plus)=='undefined'){
            console.error("请在手机app环境下使用");
            return;
        }
        var token = plus.webview.currentWebview().token;
        mui.fire(plus.webview.currentWebview().opener(), token, {
            data: data
        });
    }
}