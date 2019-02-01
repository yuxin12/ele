import axios from 'axios'
import qs from 'qs'
import {GetCookie} from "../cookie";

const server=axios.create({
  timeout:5000,
  baseURL:"",
  withCredentials:true,
})
server.interceptors.request.use((config)=>{
  if(config.method=='post'){
    // console.log(config.data);
    // config.data=qs.stringify(config.data)
    // console.log(config.data);
  }
  else if(config.method=='get'){
    config.params={...config.params}
  }
  config.headers["Content-type"]="application/json";
  return config;
},(err)=>{
  return Promise.reject(err)
})
server.interceptors.response.use((res)=>{
  if(res.status==200){
    return res.data
  }
},(err)=>{
  return Promise.reject(err)
})
export default server;
