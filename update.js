var dbname = process.argv[2];
var url = "mongodb://localhost:27017/"+dbname;
var mongo = require("mongo").MongoClient;

mongo.connect(url, function(err, db){
  if (err) throw err
  var users = db.collection("users");
  users.
  
  
})