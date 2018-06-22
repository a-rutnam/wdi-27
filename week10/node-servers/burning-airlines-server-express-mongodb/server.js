const express = require('express');
const app = express();

const bodyParser = require('body-parser');  // to handle POST data
app.use( bodyParser.json() );

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

  // Get all records, same as Flight.all
  db.collection('flights').find().toArray((err, results) => {
    res.json(results);
  });

}); // /flights

app.get('/flights/:id', (req, res) => {

  // Get one record, same as Flight.find params[:id]
  db.collection('flights').findOne({ number: req.params.id }, (err, result) => {
    res.json( result );
  });

}); // /flights/:id

app.get('/flights/search/:origin/:destination', (req, res) => {
  // console.log( req.params );

  // find all flights matching certain criteria,
  // same as Flight.where origin: params[:origin], destination: params[:destination]
  db.collection('flights')
  .find({ origin: req.params.origin, destination: req.params.destination })
  .toArray( (err, results) => {
    res.json( results );
  });

  // res.json( req.params );
});

app.post('/reservation', (req, res) => {
  console.log('POST request', req.body);

  // Update the reservations for a flight;
  // no exact equivalent in ActiveRecord because the reservations are not stored
  // in a separate table (i.e. an association via a foreign key) - in MongoDB
  // the 'associated' data for this flight is stored in the record ('document') itself,
  // as nested data in the object, i.e. an array of reservation objects inside the flight

  // Nearest AR equivalent might be Flight.find(id).reservations << {row: 10, col: 1}
  db.collection('flights').update(
    // record to modify (i.e how to find the record):
    { number: req.body.flight_number },
    // modifications to make:
    {
      $push: {
        reservations: {
          row: req.body.row,
          col: req.body.col,
          passenger: { name: 'who knows', email: 'fake' }
        }
      },
    },
    // callback to run when the update is finished:
    (err, result) => {
      res.json( result );
    }
  );

});


// reservations:  $addToSet
