import axios from '../../axios'
export default {
  login({commit},params){
    axios.post("api/login",{
      "userName":params.userName,
      "passWord":params.passWord
    }).then((data)=>{
      if(data.ok==1){
        commit("loginMutation",{userName:data.userName,token:data.token})
      }
      else{
        alert("密码或登录名错误，请重新输入")
      }
    })
  }
}
