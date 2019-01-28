const db=require("../../db/index")
module.exports.login=function(req,res) {
  console.log(req.body.userName);
  db.find("eleVueAdminList", {
    where:{
      adminName:req.body.userName,
      passWord:req.body.passWord
    }
    }, function (err, results) {
    if(results){
      //查到了
      // console.log("success")
      res.json({
        ok:1,
        msg:"登陆成功"
      })
    }else {
      res.json({
        ok:2,
        msg:'登陆失败'
      })
    }
  });
}
