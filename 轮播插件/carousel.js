/**
 * author by longhui
 */

function Carousel(ele,obj){
    this.ele=ele
    this.obj=obj

}






function banner(ele,url){
    let amount=url.length
    let ul=document.createElement('ul')
    ele.appendChild(ul)
    ul.setAttribute('class','banner')
    for(let i=0;i<amount;i++){
        let li=document.createElement('li')
        li.innerHTML=`<a href="#"><img src=${url[i]}></a>`
        ul.appendChild(li)
    }
}
function indicator(ele){
    let length=4
    let ul=document.createElement('ul')
    ele.appendChild(ul)
    ul.setAttribute('class','circle clearfix')
    for(let i=0;i<length;i++){
        let li=document.createElement('li')
        ul.appendChild(li)
    }   
}
function animate(ele,target,step){
    clearInterval(ele.time)
    ele.time=setInterval(function(){
        let current=ele.offsetWidth
        step=current<target?step:-step
        current+=step
        if(Math.abs(current-target)>Math.abs(step)){
            ele.style.left=current+'px'
        }else {
            clearInterval(ele.time)
            ele.style.left=target+'px'
        }
    })
}
window.onload=function(){
    let url=['images/1.jpg','images/2.jpg','images/3.jpg']
    var container=document.getElementById('lunbo')
    banner(container,url)
    indicator(container)
}