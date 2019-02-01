import JsCookie from 'js-cookie'
const TokenKey='Token'
const UserName="username"
import store from '../store'
export const SetCookie =()=>{
  JsCookie.set(TokenKey,store.state.Login.token);
  JsCookie.set(UserName,store.state.Login.userName)
}
export const GetCookie =(TokenKey=TokenKey)=>{
  return JsCookie.get(TokenKey)
}
export const RemoveCookie =()=>{
  JsCookie.remove(TokenKey);
  JsCookie.remove(UserName);
}
