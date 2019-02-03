import axios from '../../axios/index'
export default {
  addShopTypeAction({commit},params){
    console.log(1234,params)
    axios.post("/api/addShopType",params).then((data)=>{
      console.log(data);
    })
  },
  getShopTypeListActions({commit}){
    axios.get("/api/getShopTypeList").then((data)=>{
      console.log(data.shopTypeList);
      commit("getShopTypeListMutation",data.shopTypeList)
    })
  }
}
