import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import Login from './login'
import Home from './home'
let state={

}
let actions={
login(){

}
}
let mutations={

}
let getters={

}
const Store =new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules:{
    Login,
    Home
  }
})
export default Store
