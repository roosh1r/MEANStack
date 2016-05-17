var mongodb = require('mongodb');

var uri = "mongodb://localhost:27017/test";

mongodb.MongoClient.connect(uri, function(error, db) {
	if (error) {
		console.log(error);
		process.exit(1);
	}
	var doc = {
    title: "Jaws",
    year: 1975,
    director: "Steven Spielberg",
    rating: "PG",
    ratings: {
      critics: 80,
      audience: 97
    },
    screenplay: ['Peter Benchley', 'Carl Gotlieb']
  };
  db.collection('movies').insert(doc, function(error, result) {
    if (error) {
      console.log(error);
      process.exit(1);
    }
    //var query = { 'ratings.audience': {'$gte': 90} };
    var query = { year: 1975 };
    db.collection('movies').find(query).toArray(function (error, docs) {
      docs.forEach(function (docs) {
        console.log(JSON.stringify(doc));
      });
      process.exit(0);
    });
  });
});
