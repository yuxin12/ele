import Vue from 'vue'
import Router from 'vue-router'
import Login from './login/index'
import Home from './home/index'
import store from '../store'
import {GetCookie} from "../cookie";

Vue.use(Router)
const Routers= new Router({
  routes: [
    {
      path: '/',
      redirect:"/login"
    },
    ...Login,
    ...Home,
  ]
})
Routers.beforeEach((to,from,next)=>{
  if(to.meta.needAuth==true){
  //如果需要登陆的话
    const token=GetCookie();
    //token必须要从cookie里面获取
    if(token.Token.length>0){
    //此时有token
      next();
    }
    else{
    //没有的话
      next("/login")
    }
  }
  else {
    //不需要登陆就可以进入
    next();
  }
})
export default Routers
