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
   
    // 页面动画
    //顶部导航的显示和隐藏
    top_bar.on({'mouseenter':function(){
        logo.animate({'top':130},function(){top_bar.animate({'opacity':1})})
    },'mouseleave':function(){
        top_bar.animate({'opacity':0},function(){logo.animate({'top':40})})
    }})
    //
  
})