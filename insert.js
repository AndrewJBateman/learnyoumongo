var url = "mongodb://localhost:27017/learnyoumongo";
var first_name = process.argv[2];
var last_name = process.argv[3];
var new_doc = {firstName: first_name, lastName: last_name};
var mongo = require("mongodb").mongoClient;

mongo.connect(url, function(err, db){
  if (err) throw err;
  var docs = db.collection("docs");
  docs.insert(new_doc, function(err, data){
    if (err) throw err;
    console.log(JSON.stringify(new_doc));
    db.close();
  });
});
  