const db=require("../../db/index")
const jwt=require("jsonwebtoken")
const express=require("express")
const app=express();
const bodyParser=require("body-parser")
app.use(bodyParser.json())
module.exports.login=function(req,res) {
  console.log(req.body);
  db.find("eleVueAdminList", {
    where:{
      adminName:req.body.userName,
      passWord:req.body.passWord
    }
    }, function (err, results) {
    if(results){
      //查到了
      // console.log("success")
      //生成token
      let payload={
        userName:req.body.userName
      }
      let scrict="eleVue"
      let token=jwt.sign(payload,scrict,{expiresIn:"1h"})
      // console.log(token);
      // res.cookie("name",'zhangsan');
      res.json({
        ok:1,
        msg:"登陆成功",
        token:token,
        userName:req.body.userName
      })
    }else {
      res.json({
        ok:2,
        msg:'登陆失败'
      })
    }
  });
}
