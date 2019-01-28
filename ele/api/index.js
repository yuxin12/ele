const express=require("express")
const app =express();
const db=require("./db/index")
const Login =require("./function/login/index")
const bodyParser=require("body-parser")
app.use(bodyParser.json())
app.all("*",function (req,res,next) {
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers",'Content-Type')
  next();
})
app.post("/login",Login.login)
app.listen(8081,function () {
  console.log("success");
})

