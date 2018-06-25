$(function(){
    /*swiper插件轮播启动*/
    new Swiper('.swiper-container',{
        autoplay:3000,
        loop:true,
        pagination:'.swiper-pagination',
        autoplayDisableOnInteraction:false
    });
    /******************************** */
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
        console.log(before_page.outerWidth())


    /**************全局变量 */
    var canMove=false,
        can_top_move=false
    // 页面动画
    //顶部导航的显示和隐藏
    top_bar.on({'mouseenter':function(){
        logo.animate({'top':130},function(){top_bar.animate({'opacity':1})})
    },'mouseleave':function(){
        top_bar.animate({'opacity':0},function(){logo.animate({'top':40})})
    }})
    //
    top_menu.on('click',showLeft)
    three_line.on('click',hideLeft)
    left_page.on({'mouseenter':function(){
        $(this).css('background-color','rgba(0,0,0,0.2)').find('.bar,.link-box').css('opacity',0) 
        logo.stop().animate({'left':'25%','top':40},100)
        bt_text.stop().animate({'left':'25%'},100)
       
    },'mouseleave':function(){
        $(this).css('background-color','rgba(0,0,0,0.0)').find('.bar,.link-box').css('opacity',1)
        logo.stop().animate({'left':'50%','top':40},100)
        bt_text.stop().animate({'left':'50%'},100)
    }})
    right_page.on({'mouseenter':function(){
        $(this).css('background-color','rgba(0,0,0,0.2)').find('.bar,.link-box').css('opacity',0)
        logo.stop().animate({'left':'75%','top':40},100)
        bt_text.stop().animate({'left':'75%'},200)
        
    },'mouseleave':function(){
        $(this).css('background-color','rgba(0,0,0,0.0)').find('.bar,.link-box').css('opacity',1)
        logo.stop().animate({'left':'50%','top':40},100)
        bt_text.stop().animate({'left':'50%'},100)
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
            top_bar.css({top:0,opacity:0})
        })
    }

    
})