const mongodb=require("mongodb")
const mongoClient=mongodb.MongoClient;
function _connect(cb) {
  mongoClient.connect("mongodb://127.0.0.1:27017",function (err,client) {
    cb(client.db("eleVue"));
  })
}
module.exports.find=function(coll,obj,cb) {
  _connect(function (db){
    db.collection(coll).findOne(obj.where,cb);
  })
}

