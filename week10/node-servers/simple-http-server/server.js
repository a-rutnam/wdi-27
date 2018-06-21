
const http = require('http');  // import http from 'http';

const port = process.argv[2] || 8888;

http.createServer( (request, response) => {
  console.log('request made', request.url)

  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World!');

})
.listen( port );

console.log(`Listening for incoming connections on port ${ port }...`);
