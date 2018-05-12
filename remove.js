var collection_name = process.argv[3]
var url = "mongodb://localhost:27017/" + process.argv[2]
var mongo = require("mongodb").MongoClient

mongo.connect(url, function(err, db){
  if (err) throw err
  var col = db.collection(collection_name)
  
})
