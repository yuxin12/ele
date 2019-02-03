const express=require("express")
const app =express();
const Login =require("./function/login/index")
const Home=require("./function/home/index")
const bodyParser=require("body-parser")
app.use(bodyParser.json())
app.use(express.static("./upload"))
app.all("*",function (req,res,next) {
    // res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Expose-Headers",'Content-Type');
  res.header("Access-Control-Allow-Credentials",true)
    next();
})
app.post("/login",Login.login)
app.post("/addShopType",Home.addShopType)
app.get("/getShopTypeList",Home.getShopTypeList)
app.listen(8081,function () {
  console.log("success");
})

