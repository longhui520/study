/**
 * author by longhui
 */
// 构造函数
function MyCarousel(ele, obj) {
    this.ele = ele
    this.url = obj.url
    this.width=obj.imgWidth
    this.height=obj.imgHeight
    this.index=1
    this.flag=true
    this.init()
}
// 原型函数
MyCarousel.prototype.addBanner = addBanner
MyCarousel.prototype.addIndicator = addIndicator
MyCarousel.prototype.animate = animate
MyCarousel.prototype.addSlider=addSlider
MyCarousel.prototype.init = function () {
    this.banner=this.addBanner()
    this.indicator=this.addIndicator()
    this.slider=this.addSlider()
    //设置主盒子
    this.ele.style.width=this.width+'px'
    this.ele.style.height=this.height+'px'
    
    //设置banner盒子
    let first=this.banner.children[0].cloneNode(true)
    let last=this.banner.children[this.banner.children.length-1].cloneNode(true)
    this.banner.insertBefore(last,this.banner.children[0])
    this.banner.appendChild(first)
    this.banner.style.left=-this.width+'px'
    this.banner.style.width=this.width*this.banner.children.length+'px'
   
    //设置引导栏的状态
    var setIndicatorState=index=>{
        for(let i=0;i<this.url.length;i++){
            this.indicator.children[i].className=''
        }
        this.indicator.children[index].className='now'
    }
    /**********************功能函数************************* */
    //向后
    var next=()=>{
        
        this.index++
        // console.log(this.index)
        if(this.index>this.url.length){
            this.index=1
            this.banner.style.left=0+'px'
        }
        //设置引导栏状态
        setIndicatorState(this.index-1)
        // 执行动画
        this.animate(this.banner,-this.index*this.width,10)
        }
    //向前
    var pre= ()=>{
        
        this.index--
        if(this.index==0){
            this.index=this.url.length
            this.banner.style.left=-(this.url.length+1)*this.width+'px'
        }
        //设置引导栏状态
        setIndicatorState(this.index-1)
        // 执行动画
        this.animate(this.banner,-this.index*this.width,10)
    }
    function auto(){
        let timer= setInterval(function(){
             next()
        },2000)
        return timer
    }
    /*************************************/  

     //设置向后的点击事件
    this.slider.children[0].onclick=next
     //设置向前的点击事件
    this.slider.children[1].onclick=pre
    //自动播放
    this.auto=auto()
    
    this.ele.onmouseover=()=>{
        this.slider.style.display='block'
        clearInterval(this.auto)   
    }
    this.ele.onmouseout=()=>{
        this.slider.style.display='none'
        clearInterval(this.auto)
        this.auto=auto()
    }
    // 指示器指定图片
    for(let i=0;i<this.url.length;i++){
        let that=this
        this.indicator.children[i].onmouseover=(function(i){
            return function(){
                //关闭自动轮播定时器    
                clearInterval(that.auto)
                console.log(that.auto)
                that.index=i+1
                setIndicatorState(that.index-1)
                console.log(-that.index*that.width)
                that.banner.style.left=-that.index*that.width+'px'
            }    
        })(i)
        this.indicator.children[i].onmouseout=function(){
            clearInterval(that.auto)
            that.auto=auto()
        }
    }
   
}

//功能函数
function addBanner() {
    let amount = this.url.length
    let ul = document.createElement('ul')
    this.ele.appendChild(ul)
    ul.setAttribute('class', 'banner')
    for (let i = 0; i < amount; i++) {
        let li = document.createElement('li')
        li.innerHTML = `<a href="#"><img src=${this.url[i]}></a>`
        ul.appendChild(li)
    }
    return ul
}
function addIndicator() {
    let amount = this.url.length
    let ul = document.createElement('ul')
    this.ele.appendChild(ul)
    ul.setAttribute('class', 'circle clearfix')
    for (let i = 0; i < amount; i++) {
        let li = document.createElement('li')
        ul.appendChild(li)
    }
    return ul
}
function addSlider() {
    let div = document.createElement('div')
    this.ele.appendChild(div)
    div.innerHTML='<span id="slider-pre">&lt;</span><span id="slider-next">&gt;</span'
    div.setAttribute('class','slider')
    return div 
    
}
function animate(ul, target, step) {
    clearInterval(ul.time)
    ul.time = setInterval(function () {
        let current = ul.offsetLeft
        step = current<target? Math.abs(step) : -Math.abs(step)
        // console.log(step)
        current += step
        if (Math.abs(current - target) > Math.abs(step)) {
            ul.style.left = current + 'px'
        } else {
            clearInterval(ul.time)
            ul.style.left = target + 'px'
        }
    },20)
}
// 程序执行开始
window.onload = function () {
    let url = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg']
    // 有些css样式还未进行参数化
    let obj = { url: url ,imgWidth:500,imgHeight:200}
    let container = document.getElementById('lunbo')
    let aswipper = new MyCarousel(container, obj)
}