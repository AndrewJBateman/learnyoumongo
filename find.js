var url = "mongodb://localhost:27017/learnyoumongo";
var mongo = require("mongodb").MongoClient;
    
mongo.connect(url, function(err, db) {
      // db gives access to the database
    });
