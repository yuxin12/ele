import Vue from 'vue'
import Router from 'vue-router'
import Login from './login/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:"/login"
    },
    ...Login,
  ]
})
