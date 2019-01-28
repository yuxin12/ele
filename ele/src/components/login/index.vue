<template>
  <el-form :model="ruleForm2"
           status-icon :rules="rules2"
           ref="ruleForm2"
  class="login_d_form">
    <p class="eleLogin_d">
      饿了么后台管理
    </p>
    <el-form-item label="用户名" label-width="70px" prop="name" class="login_d_name">
      <el-input v-model="ruleForm2.name" class="login_d_name_input"></el-input>
    </el-form-item>
    <el-form-item label="密码" label-width="70px" prop="pass" class="login_d_pass">
      <el-input type="password" v-model="ruleForm2.pass" autocomplete="off" class="login_d_pass_input"></el-input>
    </el-form-item>
    <el-form-item class="login_d_button">
      <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
      <el-button @click="resetForm('ruleForm2')">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          var reg=/^[a-zA-Z0-9]{4,10}$/;
          if(!reg.test(value)){
            callback(new Error("密码应为4-10位之间的合法字符"))
          }
          callback();
        }
      };

      var validatePhone = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('用户名不可为空'));
        } else {
          if (value !== '') {
            var reg=/^[a-zA-Z][a-zA-Z0-9]{3,10}$/;
            if(!reg.test(value)){
              callback(new Error('请输入正确的用户名（用户名长度在3-10位之间且以字母开头）'));
            }
          }
          callback();
        }
      };
      return {
        ruleForm2: {
          name:"",
          pass: '',
        },
        rules2: {
          pass: [
            { required: true,validator: validatePass, trigger: 'blur' }
          ],
          name: [
            { required: true,validator: validatePhone, trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
              axios.post("http://localhost:8081/login",{
                  userName:this.ruleForm2.name,
                  passWord:this.ruleForm2.pass
              }).then(({data})=>{
                console.log(data);
              })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style scoped>
  .eleLogin_d{
    height:60px;
    line-height:60px;
    font-size:24px;
    font-weight:800;
    text-align: center;
  }
  .login_d_form{
    height:400px;
    width:440px;
    padding:20px 30px;
    margin:100px auto;
    box-shadow: 0px 0px 10px #ccc;
  }
  .login_d_button{
   display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height:150px
  }
  .login_d_name .login_d_name_input,.login_d_pass .login_d_pass_input {
    height:30px;
    width:340px;
    line-height:30px;
  }
</style>




<!--</style>-->
