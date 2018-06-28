$(function(){
     /*************相关DOM元素********* */
     var top_bar=$('.top-bar'),
     left_nav=$('.left-nav'),
     top_menu=$('.top-bar .menu'),
     three_line=$('.left-nav .three-line'),
     before_page=$('.before-page'),
     left_page=$('.before-page .left-page'),
     right_page=$('.before-page .right-page'),
     bt_text=$('.bt-text')
     logo=$('.logo')
    /**************全局变量 */
    var canMove=false,
     can_top_move=false


     top_menu.on('click',showLeft)
     three_line.on('click',hideLeft)
     $('.left-nav .menu').on('click',hideLeft)
     left_page.on({'mouseenter':function(){
         $(this).css('background-color','rgba(0,0,0,0.2)').find('.bar,.link-box').css('opacity',0) 
         logo.stop().animate({'left':'25%','top':40},150)
         bt_text.stop().animate({'left':'25%'},150)
        
     },'mouseleave':function(){
         $(this).css('background-color','rgba(0,0,0,0.0)').find('.bar,.link-box').css('opacity',1)
         logo.stop().animate({'left':'50%','top':40},150)
         bt_text.stop().animate({'left':'50%'},150)
     }})
     right_page.on({'mouseenter':function(){
         $(this).css('background-color','rgba(0,0,0,0.2)').find('.bar,.link-box').css('opacity',0)
         logo.stop().animate({'left':'75%','top':40},150)
         bt_text.stop().animate({'left':'75%'},150)
         
     },'mouseleave':function(){
         $(this).css('background-color','rgba(0,0,0,0.0)').find('.bar,.link-box').css('opacity',1)
         logo.stop().animate({'left':'50%','top':40},150)
         bt_text.stop().animate({'left':'50%'},150)
     }})
     /*********具体动画函数************ */
     //左侧菜单的移出
     function showLeft(){
         canMove=true
         top_bar.animate({'top':-top_bar[0].offsetHeight},300,function(){
             left_nav.animate({'left':"0px"},300,function(){
                 canMove=false
             })
         })
     }
     // 左侧菜单隐藏
     function hideLeft(){
         left_nav.animate({'left':-left_nav[0].offsetWidth},300,function(){
             top_bar.stop().animate({top:0,opacity:1})
         })
     }
     $(function(){
         console.log( $('.onelist .search img'));
         $('.onelist .search img').on('click',function(){
             $(this).parent().toggleClass('re-search')
         })
     })
     
})