/*challenge:
REMOVE
 Exercise 7 of 9
This lesson involves removing a document with the given _id.
The database name will be accessible via process.argv[2].
The collection name will be passed as the second argument to your script.
The _id will be passed as the third argument to your script.
*/

var collection_name = process.argv[3];
var id = process.argv[4];
var url = 'mongodb://localhost:27017/' + process.argv[2];
var mongo = require('mongodb').MongoClient;

mongo.connect(url, function (err, db) {
	if (err) throw err;
	var col = db.collection(collection_name);
	col.remove(
		{
			_id: id,
		},
		function (err, data) {
			if (err) throw err;
			db.close();
		}
	);
});
