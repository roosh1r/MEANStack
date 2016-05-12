/*
 *  Inserts "doc" into the collection "movies".
 */
exports.insert = function(db, doc, callback) {
  // TODO: implement
  db.collection('movies').insert(doc, function(error, result) {
    if(error){
      console.log(error);
      process.exit(1);
    }
  });
  callback(null);
};

/*
 *  Finds all documents in the "movies" collection
 *  whose "director" field equals the given director,
 *  ordered by the movie's "title" field. See
 *  http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#sort
 */
exports.byDirector = function(db, director, callback) {
  // TODO: implement]
  var query = { "director" : director };
  var sorter = { "title" : 1 };
  var data;
  db.collection('movies').find(query).nextObject( function (error, docs) {
    if (error) {
      console.log(error);
      process.exit(1);
    }
    data = JSON.stringify(docs);
    console.log(data);
  });
  callback(null, data);
};
