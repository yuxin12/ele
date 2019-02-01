<template>
<div id="home_header">
<div class="home_header_logo">
  饿了么
</div>
  <div class="loginn">
    <el-dropdown class="loginn_el" @command="handleCommand" trigger="click">
  <span class="el-dropdown-link">
    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="a" @click="outLogin()">退出登陆</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</div>
</template>

<script>

import {RemoveCookie} from "../../../cookie";

export default {
        name: "index",
        methods:{
          handleCommand(command){
            if(command=='a'){
              RemoveCookie();
              this.$store.commit("Login/removeLoginMutations")
              this.$router.push({name:'login'})
            }
          }
        }
    }
</script>

<style scoped>
#home_header{
  height:60px;
  background: #428bca;
}
  .home_header_logo{
    height:60px;
    width:200px;
    font-size:40px;
    line-height:60px;
    color:#fff;
    font-weight:800;
    margin-left:50px;
  }
  .loginn{
    position: absolute;
    top:0;
    right:10px;
  }
  .loginn_el{
    height:60px;
    width:100px;
  }
  .loginn_el span{
    line-height: 60px;
    color:#fff;
  }
</style>
