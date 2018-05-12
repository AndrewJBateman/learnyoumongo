var age = parseInt(process.argv[2]
var url = "mongodb://localhost:27017/learnyoumongo"
var mongo = require("mongodb").MongoClient

mongo.connect(url, function(err, db){
  if (err) throw err
  var parrots = db.collection("parrots")
  parrots.count().toArray(function(err, data){
    if (err) throw err
    colsole.log(data)
    db.close()
})
  
