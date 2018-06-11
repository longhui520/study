(function($){
    $.extend($.fn,{
        color:function(options){
            var options=$.extend({},$.fn.defaults,options)
            return this.each(function(){
                $(this).css("color",options.fcolor)
                $(this).css('backgroundColor',options.bcolor)
            })
        }
    }
    )
    $.fn.defaults={
        bcolor:'white',
        fcolor:'black'
    }
})(jQuery)
$(function(){
    $('.box').color({
        bcolor:'#eea',
        fcolor:'red'
    })
})