;!function(win){
    "use strict";
    var doc = document
        , config = {
              modules: {} //记录模块物理路径
            , status: {} //记录模块加载路径
            , timeout: 10 //符合规范的模块请求最长等待秒数
            , event: {} //记录模块自定义事件    
        }
        , layui = function(){
            this.v='2.4.5';//定义版本号
        }
        //获取layui所在目录
        ,getpath = function(){
            var jsPath = doc.currentScript?doc.currentScript.src:function(){
                var js = doc.scripts
                  , last = js.length -1
                  , src;
                console.log(1);
                for(var i=last;i>0;i--){
                    if(js[i].readyState === 'interactive'){
                        src = js[i].src;
                        break;
                    }
                }
                return src || js[last].src;
            }
            return jsPath.substring(0,jsPath.lastIndexOf('/')+1);
        }
        ,error = function(msg){
            win.console && console.error && console.error('Layui hint: ',msg);
        }
        ,isOpera = typeof opera!= 'undefined' && opear.toString()==='[object opera]'
        ,modules = {
            layer: 'modules/layer'
          , laydate: 'modules/laydate'
          , laypage: 'modules/laytpl'
          , layim: 'modules/layim'
          , layedit:'modules/layedit'  
        };
        Layui.prototype.cache = config;
        Layui.prototype.define = function(deps,factory){
            var that = this
              , type = typeof deps ===' function'
              , callback = function(app,exports){
                  var setApp = function(app,exports){
                    layui[app] = exports;
                    config.status[app]= true;      
                  };
                  typeof factory === 'function' && factory(function(app,exprots){
                      setApp(app,exports);
                      config.callback[app]=function(){
                          factroy(setApp);
                      };
                  });
                  return this;
              };

        }
}(window)