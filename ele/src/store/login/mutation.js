import {SetCookie} from '../../cookie/index'
export default {
  loginMutation(state,payload){
    state.userName=payload.userName;
    state.token=payload.token;
    SetCookie();
  },
  removeLoginMutations(state){
    state.userName="";
    state.token="";
  }
}
