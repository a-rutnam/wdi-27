
const http = require('http');

http.get(process.argv[2], (response) => {

  // console.log('response', response);

  response.setEncoding('utf8');

  // const dataHandler = (data) => {
  //   console.log(data);
  // }
  // response.on('data', dataHandler);

  response.on('data', console.log);
  response.on('error', (err) => {
    console.error('ERROR', err)
  });

})
.on('error', (err) => {
  console.warn('.get() handler', err)
});
