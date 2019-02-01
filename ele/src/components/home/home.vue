<template>
    <div id="home">
      <el-container >
        <el-header height="60px" class="home_header"><Header_com/></el-header>
        <el-container class="home_containter">
          <el-aside width="200px"><Aside_com/></el-aside>
          <el-main><router-view/></el-main>
        </el-container>
      </el-container>
    </div>
</template>

<script>
  import Aside from './aside/index'
  import Header from './header/index'
  import Vuex from 'vuex'
    export default {
        name: "home",
        components:{
          "Header_com":Header,
          "Aside_com":Aside
        },
      computed:{
        ...Vuex.mapState({
          "token":state=>state.Login.token,
        })
      }
    }
</script>

<style scoped>
.home_header{
  padding:0;
}
</style>
