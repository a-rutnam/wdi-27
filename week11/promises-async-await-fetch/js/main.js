// Promises with nested .then callbacks (NOT the preferred way to do it! But it works...)
/*
fetch('https://jsonplaceholdasder.typicode.com/posts/1')
.then( response => {
  response.json().then( actualData => {
    console.log('data', actualData);
  });
});

*/


// Promises with chained .then methods
// Note that you *must return* a promise from your .then callback, for the next .then to respond to
/*
fetch('https://jsonplaceholder.typicode.com/posts/1')
.then( response => response.json() )
.then( data => console.log('data: ', data) )
.catch( err => console.warn('caught error', err) );
*/

// async/await: 'syntactic sugar' for Promises
// i.e. a way of dealing with async code, but without any callback functions
/*
const getPost = () => {

  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await response.json();

};

getPost();
*/

/*
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify( {title: 'Test title', body: 'Lorem ipsum whatevsum'} ),
  headers: { 'Content-type': 'application/json' }
})
.then( response => {
  // throw new Error('GOT PROBLEMS!');
  return response.json();
})
.then( data => console.log('data:', data) )
.catch( err => console.warn('got an error:', err) );


const submitPost = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify( {title: 'Test title', body: 'Lorem ipsum whatevsum'} ),
    headers: { 'Content-type': 'application/json' }
  });
  const data = await res.json();

  console.log('async data:', data);
};

submitPost();
*/


const waiter = (time) => {
  return new Promise( (resolve, reject) => {

    setTimeout( () => {
      const dice = Math.random();
      if(  dice > 0.5 ){
        console.log('RESOLVING');
        resolve([ dice, time ]);
      } else {
        console.log('REJECTING');
        reject([ dice, time ]);
      }
    }, time);

  }); // Promise callback
};

waiter(1000)
.then( data => {
  console.log('resolved after 1 second!', data);
  return waiter(800);
})
.then( data => {
  console.log('SECOND resolved after another 1 second', data);
})
.catch( data => {
  console.warn('Caught error!', data);
});


const doWait = async () => {

  try {
    const first = await waiter(1000);
    console.log('first data', first);

    const second = await waiter(1000 * first[0]);
    console.log('second data', second);
  } catch( e ){
    console.warn('GOT ERROR', e);
  }

};

doWait();
console.log('run immediately');



// console.log('returned: ', returnVal);
