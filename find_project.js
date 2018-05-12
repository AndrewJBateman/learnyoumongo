var url = "mongodb://localhost:27017/learnyoumongo";
var age = parseInt(process.argv[2]);
var mongo = require("mongodb").MongoClient;

mongo.connect(url, function(err,db){
  if (err) throw err;
  var parrots = db.collection("parrots");
  parrots.find({
    age: {
      $gt:age
    }
  }).toArray(function(err, data){
    if (err) throw err;
    console.log(data);
    db.close();
  });
});