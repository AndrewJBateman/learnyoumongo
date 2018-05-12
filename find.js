var url = "mongodb://localhost:27017/learnyoumongo";
var age_passed = parseInt(process.argv[2]);
var mongo = require("mongodb").MongoClient;
 
mongo.connect(url, function(connect_err, db) {
  if (connect_err) throw connect_err;
  var parrots = db.collection("parrots");
  parrots.find({
    age: {$gt: age_passed}
  }).toArray(function(find_err,data){
    if (find_err) throw find_err;
    console.log(data);
    db.close();
  })
});
