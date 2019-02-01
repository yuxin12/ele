import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import state from './state'
import actions from './action'
import mutations from './mutation'
import getters from './getter'
export default{
  namespaced:true,
  state,
  actions,
  mutations,
  getters
}
