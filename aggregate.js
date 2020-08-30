/*Challenge: Exercise 9 of 9
output the average price
of the items that match the size criteria input
the average is converted to number and rounded to
2 decimals*/

var mongoClient = require('mongodb').MongoClient;
var collectionName = 'prices';
var databaseName = 'learnyoumongo';
var size = process.argv[2];
var url = 'mongodb://localhost:27017/learnyoumongo';

mongoClient.connect(url, function (err, DB) {
	var dataBase = DB.db(databaseName);

	dataBase
		.collection(collectionName)
		.aggregate([
			{ $match: { size: size } },
			{ $group: { _id: 'average', total: { $avg: '$price' } } },
		])
		.toArray(function (err, results) {
			if (err) {
				console.log(err);
			}
			if (!results.length) {
				throw new Error('No results found');
			}
			console.log(Number(results[0].total).toFixed(2));
			console.log(results);
		});

	DB.close();
});

/*Here's the official solution in case you want to compare notes:
────────────────────────────────────────────────────────────────────────────────
    var mongo = require('mongodb').MongoClient
    var size = process.argv[2]

    var url = 'mongodb://localhost:27017/learnyoumongo'

    mongo.connect(url, function(err, db) {
      if (err) throw err
      var prices = db.collection('prices')
      prices.aggregate([
        { $match: {
          size: size
        }}
      , { $group: {
          _id: 'average'
        , average: {
            $avg: '$price'
          }
        }}
      ]).toArray(function(err, results) {
        if (err) throw err
        if (!results.length) {
          throw new Error('No results found')
        }
        var o = results[0]
        console.log(Number(o.average).toFixed(2))
        db.close()
      })
    })*/
