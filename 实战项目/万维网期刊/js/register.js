$(function(){
    // 获取元素
    let phoneNumber=$('.phone-number>div>input')
    let userName=$('.user-name>div>input')
    let userPsd=$('.user-psd>div>input')
    let userPsdAgain=$('.user-psd-again>div>input')
    let verification=$('.verification>div>input')
    // console.log(userPsd)
    phoneNumber.on({
        'focus':function(){
            $(this).val('') 
        },
        'blur':function(){
            if(checkMobile($(this).val())){
                $(this).parent().addClass('ok').next().css('visibility','hidden')
            }else{
                $(this).css('borderColor','red').parent().removeClass('ok').next().css('visibility','visible')
            }
        }    
    })
    userName.on({
        'focus':function(){
            $(this).val('') 
        },
        'blur':function(){
            if(checkName($(this).val())){
                $(this).parent().addClass('ok').next().css('visibility','hidden')
            }else{
                $(this).css('borderColor','red').parent().removeClass('ok').next().css('visibility','visible')
            }
        }    
    })
    userPsd.on({
        'focus':function(){
            $(this).val('') 
        },
        'blur':function(){
            if(CheckPassWord($(this).val())){
                $(this).parent().addClass('ok').next().css('visibility','hidden')
            }else{
                $(this).css('borderColor','red').parent().removeClass('ok').next().css('visibility','visible')
            }
        }    
    })
    userPsdAgain.on({
        'focus':function(){
            $(this).val('') 
        },
        'blur':function(){
            if($(this).val()===userPsd.val()){
                $(this).parent().addClass('ok').next().css('visibility','hidden')
            }else{
                $(this).css('borderColor','red').parent().removeClass('ok').next().css('visibility','visible')
            }
        }    
    })
    verification.on({
        'focus':function(){
            $(this).val('') 
        },
        'blur':function(){
            if($(this).val()==='1234'){
                $(this).parent().addClass('ok').next().css('visibility','hidden')
            }else{
                $(this).css('borderColor','red').parent().removeClass('ok').next().css('visibility','visible')
            }
        }    
    })
    function checkMobile(value){ 
        if((/^1[3|4|5|7|8][0-9]{9}$/.test(value))){ 
         return true
        } 
    }
    function checkName(value){
        if(/^[a-zA-Z\d]\w{3,11}[a-zA-Z\d]$/.test(value)){
            return true
        }
    }
    function CheckPassWord(password) {//必须为字母加数字且长度不小于8位
        var str = password;
         if (str == null || str.length <8) {
             return false;
         }
         var reg1 = new RegExp(/^[0-9A-Za-z]+$/);
         if (!reg1.test(str)) {
             return false;
         }
         var reg = new RegExp(/[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/);
         if (reg.test(str)) {
             return true;
         } else {
             return false;
         }
     }
})