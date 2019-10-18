var store = new Vuex.Store({
  state:{
      list:{
          post:3333,
          list:{
              post:2222
          }
      }
  },
  mutations:{
      commit(state,playLoad){
          console.log(playLoad.post);
      }
  }
})
var app = new Vue({
  el:"#app",
  store,
  computed: {
      ... Vuex.mapState(['list']),
      ss:function(){}
  },
  methods :{
      ...Vuex.mapMutations(['commit'])
  }
})