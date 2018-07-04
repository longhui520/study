$(function(){
    // 获取元素
    let phoneNumber=$('.phone-number>div>input')
    let userName=$('.user-name>div>input')
    let userPsd=$('.user-psd>div>input')
    let userPsdAgain=$('.user-psd-agian>div>input')
    let verification=$('.verification>div>input')
    phoneNumber.on({
        'focus':function(){
            $(this).val('') 
        },
        'blur':function(){
            if(checkMobile($(this).val())){
                $(this).parent().addClass('ok')
                $(this).parent().next().css('visibility','hidden')
            }else{
                $(this).parent().removeClass('ok')
                $(this).parent().next().css('visibility','visible')
            }
          
        }
    })
    function checkMobile(value){ 
        if((/^1[3|4|5|7|8][0-9]{9}$/.test(value))){ 
         return true
        } 
    } 
})