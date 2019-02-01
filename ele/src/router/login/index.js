import Login from '../../components/login/index'
export default [
  {
    path:"/login",
    name:"login",
    component:Login,
    meta:{
      needAuth:false
    }
  }
]
