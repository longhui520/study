
var nbmbind={
    run : function(){
        this.add();
        this.del();
    },
    get : function() {
        var obj = navTab.getCurrentPanel();
        return obj;
        //return $(document);
    },
    
    del : function(){
        // 删除行
        var _this=this;
        var box = this.get();
        var delObj = $('a.nbm_bind_del');
        delObj.die();
        delObj.live('click',function(){
            var trObj = box.find('tbody tr');
            if(trObj.length >=1){
                var delinbindname=$(this).closest('td').find("input[name='delinbindname']").val(); 
                var _this=$(this).closest('tr');
                if(delinbindname){
                    //判断当前行是否可以移除
                         $.ajax({
                             type: 'POST',
                             url : "/Admin/index.php/MisAutoBind/lookupChangeField",
                             data: {delinbindname:delinbindname,type:2},
                             global:false,
                             dataType:'json',
                             success:function(list){
                                 if(list!=-1){
                                     alertMsg.error('当前绑定关系存在子级！');
                                     return false;
                                    }else{
                                        //移除添加至隐藏域
                                        _this.remove();
                                     }
                                 }
                             });
                }else{
                    //移除添加至隐藏域
                    $(this).closest('tr').remove();
                }
                
            }else{
                alertMsg.error('只有一行了，不允许删除行');
            }
        });
        //_this.run();
    },
    add : function(){
        /*var _this=this;
        var box = this.get();
        var addObj = $(box).find('a.nbm_bind_add');
        addObj.unbind('click');
        addObj.on('click',function(){
            var trObj = box.find('tr:last');
            var cloneTr = trObj.clone(true);
            box.append(cloneTr);
            initChosen();
        });
        //_this.run();
        */
        var box = this.get();
        var _this = this;
        // 每个表单中的添加一行，数据来源于当前对象所在tr的上一个tr。
        var obj = $('a.nbm_bind_add');
        obj.die();
        obj.live("click",function(){
            //var tr = $(this).closest('tr').prev('tr');
            var tr = $(this).closest('table').find('tbody:first>tr:last');
            var index = tr.closest('table').attr('index');
            try {
                index = parseInt(index, 10);
            } catch(e) {
                index = 0;
            }
            tr.find('select').select2("destroy");
            var cloneTr = tr.clone();
            tr.find('select').select2();
            cloneTr.find('input[type="hidden"]').remove();
            cloneTr.find(':input').each(function() {
                var ids = $(this).attr('name');
                // 当前组件的name值
                if ( typeof (ids) == "string") {
                    var curNames = ids.replace(/(\[)+(\d)+(\])/g,  function(va) {
                            var curIndex = va.match(/\d+/g);
                            var i = parseInt(curIndex , 10);
                            var tabIds = '[' + (i + 1)+']';
                            return tabIds;
                        });
                    $(this).attr('name',curNames);
                }
                
                if ($(this).attr('type') != "checkbox" && $(this).attr('type') != "radio") {
                    $(this).val('');
                }
                if ($(this)[0].tagName == "SELECT") {
                    var curTag = $(this);
// 						// 加样式
// 						var td = curTag.closest('td');
// 						// 获取td
// 						td.html('');
// 						var divs = $('<div class="list_group_lay"></div>');
// 						divs.append(curTag);
// 						//移除现有td内容
// 						td.append(divs);
                    //追加当前select
                    
                }
            });
            var bindsort=box.find("input[name^='inbindsort']").length;
            cloneTr.find("input[name^='inbindsort']").val(parseInt(bindsort)+1);
            cloneTr.find('select').select2();
            tr.after(cloneTr);
            $('div.tableItem>table', this.get).initUI();
            _this.run();
        });
        
    },
};

$(".nbm_bindcondition").die();
$(".nbm_bindcondition").live("click",function(){
    var p = $(this).closest('td');
    var divs = $('<div class="list_group_lay"></div>');
    var sel = p.find('select:first').clone();
    
    sel.show();
    divs.append(sel);
    divs.append("<span class=\"icon-remove nbm_remove_bindcondition\"></span>");
    p.append(divs);
    p.find("select").select2();
    p.find("span.nbm_remove_bindcondition").unbind('click');
    p.find("span.nbm_remove_bindcondition").bind("click",function(){
        $(this).closest('div.list_group_lay').remove();
    });
});

$("span.nbm_remove_bindcondition").die();
$("span.nbm_remove_bindcondition").live("click",function(){
    $(this).closest('div.list_group_lay').remove();
});

nbmbind.run();
function changeFieldBind(obj){
    var val=$(obj).val();
    var p = $(obj).closest('tr');
    if(val!=0){
        var selectVal=$(obj).find("option:selected").text();
        //赋值给标题文本框
        p.find("input[name^='inbindtitle']").val(selectVal);
    }
    var $box=navTab.getCurrentPanel();
     $.ajax({
         type: 'POST',
         url : "/Admin/index.php/MisAutoBind/lookupChangeField",
         data: {id:val},
         global:false,
         dataType:'json',
         success:function(list){
          var selhtml="<option selected='selected' value='0'>--请选择--</option>";
         var selFieldObj = $('select.nbm_bind_field',p);
         if(list) {
             // 得到字段显示下拉框对象 
             // 下拉选项对象
             if(list){
                 $.each(list['list'] , function(i , v){
                     selhtml+="<option value=\""+i+"\">"+v+"</option>";
                 });
             }
         }
         selFieldObj.html(selhtml); 
             //修改W参数
             $("button.condition_btn",p).attr("modelname",list['modelname']);
             //initChosen();
         }
     });
     
    
} 
function getroam(obj){
    var sourcemodel = '';
    var targetmodel = $(obj).val();
    $.ajax({
        type:"POST",
        url:"/Admin/index.php/MisAutoBind/getroam",
        data:{sourcemodel:sourcemodel,targetmodel:targetmodel},
        dataType:"json",
        global:false,
        success:function(data){
            /*  var html = '<select class="select2 list_select2 nbm_bind_table"  name="dataroamid[]" >'
                 html += '<option value="">请选择</option>';
             if(data){
                 $.each(data,function(i,v){
                     html += '<option value="'+v["id"]+'">'+v['title']+'</option>';
                     console.log(v);
                 }) 
             }
             
             html +="</select>"; */
             var html = '';
                 
             if(data){
                 html +='<div class="list_group_lay">';
                 html += '<select class="select2 list_select2 nbm_bind_table"  name="dataroamid[]" >';
                 html += '<option value="">请选择</option>';
                 $.each(data,function(i,v){
                     if(v){
                         html += '<option value="'+v["id"]+'">'+v['title']+'</option>';
                         //console.log(v);
                     }
                    
                 }) 
                 html +="</select>";
                 html +="</div>";
                 html += '<a href="/Admin/index.php/MisSystemDataRoamMas/add/modelname/'+sourcemodel+'" rel="MisDataWanderBox" target="navTab" title="漫游添加">漫游添加</a>';
             }else{
                 html += '<a href="/Admin/index.php/MisSystemDataRoamMas/add/modelname/'+sourcemodel+'" rel="MisDataWanderBox" target="navTab" title="漫游添加">点击配置相应的数据漫游</a>';
             }
             var ht= $(html).initUI();
            $(obj).closest("tr").find("td.roamid").html(ht).find("select").select2();
        
        }
    })
}
