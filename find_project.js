/*challenge: FIND PROJECT
 Exercise 4 of 9
Here we will learn how to search for documents but only fetch the fields
we need. Also known as projection in MongoDB
Use the parrots collection from the database named learnyoumongo to
find all documents where age is greater than the first argument
passed to your script.
The difference from the last lesson will be that we only want the
name and age properties
Using console.log, print the documents to stdout.*/

var url = "mongodb://localhost:27017/learnyoumongo";
var age = parseInt(process.argv[2]);
var mongo = require("mongodb").MongoClient;

mongo.connect(url, function(err,db){
  if (err) throw err;
  var parrots = db.collection("parrots");
  parrots.find({
    age: {$gt:age}
  },{
    name: 1,
    age: 1,
    _id: 0
  }).toArray(function(err, data){
    if (err) throw err;
    console.log(data);
    db.close();
  });
});