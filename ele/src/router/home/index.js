import Home from '../../components/home/home'
import ShopType from '../../components/home/main/shopType'
import Shop from '../../components/home/main/shop'
export default [
  {
    path:"/home",
    name:'home',
    component:Home,
    redirect:'/shopType',
    meta:{
      needAuth:true
    },
    children:[
      {
        path:"/shopType",
        name:'shopType',
        component:ShopType
      },
      {
        path:'/shop',
        name:'shop',
        component:Shop
      }
    ]
  }
]
