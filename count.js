/*challenge: COUNT
 Exercise 8 of 9
Here we will learn how to count the number of documents that
meet certain criteria.
Use the parrots collection from the database named learnyoumongo to
count all documents where age is greater than the first argument
passed to your script.
Using console.log, print the number to stdout.*/

var age = parseInt(process.argv[2]);
var url = 'mongodb://localhost:27017/learnyoumongo';
var mongo = require('mongodb').MongoClient;

mongo.connect(url, function (err, db) {
	if (err) throw err;
	var parrots = db.collection('parrots');
	parrots.count(
		{
			age: {
				$gt: age,
			},
		},
		function (err, data) {
			if (err) throw err;
			console.log(data);
			db.close();
		}
	);
});
