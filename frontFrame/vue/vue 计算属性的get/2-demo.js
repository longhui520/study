Vue.component('child',{
    props:['post'],
    created:function(){
        console.log(this.post);
    },
    template:`<div>{{post}}</div>`
});

var store = new Vuex.Store({
   state:{
       list:{
           post:1111
       }
   }
})
var app = new Vue({
   el:"#app",
   store,
   computed: {
       ... Vuex.mapState(['list'])
   }
});