/*challenge: FIND
 Exercise 3 of 9
Here we will learn how to search for documents.
In this exercise the database name is learnyoumongo.
So, the url would be something like: mongodb://localhost:27017/learnyoumongo
Use the parrots collection to find all documents where age
is greater than the first argument passed to your script.
Using console.log, print the documents to stdout.*/

var url = 'mongodb://localhost:27017/learnyoumongo';
var age = parseInt(process.argv[2]);
var mongo = require('mongodb').MongoClient;

mongo.connect(url, function (connect_err, db) {
	if (connect_err) throw connect_err;
	var parrots = db.collection('parrots');
	parrots
		.find({
			age: { $gt: age },
		})
		.toArray(function (find_err, data) {
			if (find_err) throw find_err;
			console.log(data);
			db.close();
		});
});
