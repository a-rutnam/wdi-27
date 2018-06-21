const express = require('express');
const app = express();

const cors = require("cors");
app.use( cors() );


const MongoClient = require('mongodb').MongoClient;
let db;

MongoClient.connect('mongodb://127.0.0.1:27017/ba', (err, client) => {

  if( err ) return console.log(err);

  db = client.db('ba');
});


app.listen(3000, () => {
  console.log('Server listening on port 3000...');
});

app.use( express.static('public') );

app.get('/', (req, res) => {
  // console.log('got request!');
  res.send('<h1>Hello World!</h1>');
});

app.get('/dogs', (req, res) => {
  console.log('got request!', req.query);
  // res.send(`<h1>Hello Doggy World (roundness ${ req.query.roundness })!</h1>'`);

  res.json({name: 'Rufus', roundness: 7.5});

});

app.get('/flights', (req, res) => {

  db.collection('flights').find().toArray((err, results) => {
    console.log(results);
    res.json(results);
  });

}); // /flights

app.get('/flights/:id', (req, res) => {

  db.collection('flights').findOne({ number: req.params.id }, (err, result) => {
    res.json( result );
  });

}); // /flights/:id

app.get('/flights/search/:origin/:destination', (req, res) => {
  // console.log( req.params );

  db.collection('flights')
  .find({ origin: req.params.origin, destination: req.params.destination })
  .toArray( (err, results) => {
    res.json( results );
  });

  // res.json( req.params );
});

// reservations:  $addToSet
