<template>
<div class="home_aside">
  <el-col :span="24">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#fff"
      text-color="#000"
      active-text-color="#ffd04b">
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">
          <router-link :to="{name:'shopType'}">店铺类别</router-link>
        </span>
      </el-menu-item>
      <el-menu-item index="2" >
        <i class="el-icon-document"></i>
        <span slot="title">
          <router-link :to="{name:'shop'}">店铺</router-link>
        </span>
      </el-menu-item>
    </el-menu>
  </el-col>
</div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>

</style>
