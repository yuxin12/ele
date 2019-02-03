<template>
<div id="shopType">
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="审批人">
      <el-input v-model="formInline.user" placeholder="审批人"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="addShopType">添加店铺类别</el-button>
    </el-form-item>
  </el-form>
  <el-table
    :data="shopTypeList"
    style="width: 100%">
    <el-table-column
      label="店铺类别名称"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.shopTypeName }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="店铺类别图片"
      width="180">
      <template slot-scope="scope">
        <img style="width:100px;height:100px" :src="'http://localhost:8081/'+scope.row.shopTypePic" alt="">
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <AddShopType :dialogFormVisible="dialogFormVisible"
               :changedialogFormVisible="changedialogFormVisible"></AddShopType>
</div>
</template>

<script>
  import Vuex from 'vuex'
  import AddShopType from './addShopType'
    export default {
      data() {
        return {
          formInline: {
            user: '',
            region: ''
          },
          tableData: [
            {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],
          dialogFormVisible:false
        }
      },
      components:{
        AddShopType
      },
      created(){
        this.$store.dispatch("Home/getShopTypeListActions")
      },
      computed:{
        ...Vuex.mapState({
          shopTypeList:state=>state.Home.shopTypeList
        })
      },
      methods: {
        onSubmit() {
          console.log('submit!');
        },
        changedialogFormVisible(){
          this.dialogFormVisible=!this.dialogFormVisible
        },
        addShopType(){
          //添加店铺类别
          //第一步，弹出框出现
          this.dialogFormVisible=true
        },
        handleEdit(index, row) {
          console.log(index, row);
        },
        handleDelete(index, row) {
          console.log(index, row);
        }
      }
    }
</script>

<style scoped>

</style>
