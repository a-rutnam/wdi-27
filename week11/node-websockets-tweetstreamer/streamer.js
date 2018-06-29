const express = require('express');
const app = express();
const server = require('http').createServer( app );
const io = require('socket.io')( server );

app.use( express.static('public') );

server.listen(3000, () => {
  console.log('Webserver listening on port 3000...');
});


const Twitter = require('twitter');

const client = new Twitter({
  consumer_key: 'DAdRqK0cyHsySgHnFfT3w',
  consumer_secret: '8OwlB7Zz9vs1gPQMYj7ytFEX5hB7nFtOFKRbvwn3U',
  access_token_key: '635341232-wkHeTdcdXE9ljRMlTqNnnvKAbYFqwJ2dKdYwIsu5',
  access_token_secret: '0pIKxuT0ujAe9EKfQCBnqlC62nE9n7efnWknfPdE'
});

const tweetStream = client.stream('statuses/filter', {
  track: process.argv[2] || 'Dogs',
  language: 'en'
});







io.on('connection', socket => {

  console.log('Connected to client!');
  // Connection has been established!
  // Now we can start listening for messages & sending messages through the socket

  // setInterval( () => {
  //   socket.emit('news', { message: 'you are connected to the backend!', happy: true });
  // }, 2000);

  tweetStream.on('data', tweet => {
    // console.log('tweet: ', tweet.text);
    socket.emit('tweet', tweet);
  });

  socket.on('response', data => {
    console.log('Got response from browser: ', data);
  });

  socket.on('chat', data => {
    socket.broadcast.emit('message', data);  // broadcast before emit here sends the message to everyone EXCEPT
                                             // the client who sent the message in the first place
  })

  socket.on('disconnect', data => {
    console.log('User disconnected!');
    socket.broadcast.emit('message', 'USER HAS LEFT!');
  });

}); // connection
