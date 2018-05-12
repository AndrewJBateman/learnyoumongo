var url = "mongodb://localhost:27017/learnyoumongo";
var age_passed = process.argv[2];
var mongo = require("mongodb").MongoClient;
 

mongo.connect(url, function(conn_err, db) {
  if (conn_err) throw conn_err;
  var parrots = db.collection("parrots");
  parrots.find({
    age: {$gt: +age_passed}
  }).toArray(function(find_err, documents){
    if (find_err) throw find_err;
    console.log(documents);
  })
});
