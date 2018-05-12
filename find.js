var url = "mongodb://localhost:27017/learnyoumongo";
var age_passed = parseInt(process.argv[2]);
var mongo = require("mongodb").MongoClient;
 
mongo.connect(url, function(conn_err, db) {
  if (conn_err) throw conn_err;
  var parrots = db.collection("parrots");
  parrots.find({
    age: {$gt: age_passed}
  }).toArray(function(find_err, data){
    if (find_err) throw find_err;
    console.log(data);
  })
});
