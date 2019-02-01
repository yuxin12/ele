<template>
    <div id="addShopType">
      <el-dialog title="添加店铺类别" v-if="dialogFormVisible" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="店铺类别" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off" ref="shopTypeName"></el-input>
          </el-form-item>
          <el-form-item label="店铺类别排名" :label-width="formLabelWidth">
            <el-upload
              class="upload-demo"
              action=""
              ref="upload"
              :limit="1"
              :auto-upload="false"
              :file-list="fileList">
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>

        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="addShopType">确 定</el-button>
        </div>
      </el-dialog>

    </div>
</template>

<script>
  import Vuex from 'vuex'
    export default {
        name: "add-shop-type",
        props:["dialogFormVisible","changedialogFormVisible"],
      created(){
        console.log(this.$store)
      },
        data(){
          return {
            form: {
              name: '',
              region: '',
              date1: '',
              date2: '',
              delivery: false,
              type: [],
              resource: '',
              desc: ''
            },
            fileList:[],
            formLabelWidth: '120px'
          }
        },
      mounted(){

      },
      methods:{
        ...Vuex.mapActions({
          addShopTypeMutation:"Home/addShopTypeAction"
        }),
        addShopType(){
          //弹框隐藏
          this.changedialogFormVisible();
             var newForm=new FormData()
          console.log(newForm,1);
          // console.log(this.$refs.shopTypeName.$refs.input.value)
            newForm.set("shopTypeName",this.$refs.shopTypeName.$refs.input.value)
            newForm.set("shopTypePic",document.querySelector(".el-upload .el-upload__input").files[0])
          console.log(newForm.shopTypeName,2)
          this.addShopTypeMutation(newForm)

            // console.log(document.querySelector(".el-upload .el-upload__input").files[0],"this.$ref.upload")

          }
      }
    }
</script>

<style scoped>

</style>
