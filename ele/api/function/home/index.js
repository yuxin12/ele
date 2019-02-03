const db=require("../../db/index")
const express=require("express")
const app=express();
const fs=require("fs");
const bodyParser=require("body-parser")
app.use(bodyParser.json())
const formidable=require("formidable")
module.exports.addShopType=function(req,res) {
  var form=new formidable.IncomingForm();
  form.encoding="utf-8";
  form.uploadDir="./upload";
  form.keepExtensions=true;
  form.parse(req,function (err,params,file) {
    console.log(params,file);
    if(err)
      cb({
        ok:2,
        msg:"网络连接错误"
      })
    else{
      var picName="name";
      var picInfo=file.shopTypePic;
      console.log(picInfo);
      // 上传了图片
      if(picInfo){
        var keepArr=[".gif",".png",".jpg",".webp"];
        var keepName=picInfo.name.substr(picInfo.name.lastIndexOf(".")).toLowerCase();
        if(keepArr.includes(keepName)){
          var newPicName=Date.now()+keepName;
          fs.rename(picInfo.path,"./upload/"+newPicName,function(err){
            //文件格式正确，且已经改名字了
            //上传数据库
            db.insertOne("shopTypeList",{
              shopTypeName:params.shopTypeName,
              shopTypePic:newPicName
            },function (err, results) {
              if(err){
                res.json({
                  ok:4,
                  msg:'数据库上传错误'
                })
              }
              else{
                res.json({
                  ok:1,
                  msg:"上传成功"
                })
              }
            })
          })
        }else{
          res.json({
            ok:2,
            msg:"请选择正确的图片：.gif,.png,.jpg,.webp"
          })

        }
      }else{//  未上传图片
        res.json({
          ok:3,
          params // 除图片以外的信息
        })

      }



    }

  })
}
module.exports.getShopTypeList=function (req,res) {
  db.findOne("shopTypeList",{},function (err,results) {
    if(err){
      res.json({
        ok:2,
        msg:"查询失败"
      })
    }
    else{
      res.json({
        ok:1,
        msg:"查询成功",
        shopTypeList:results
      })
    }
  })
}
