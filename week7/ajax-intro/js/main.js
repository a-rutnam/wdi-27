
const runNicely = function(someFunction){
  console.log('About to run your function for you!');
  // Run function that was passed in as an argument
  someFunction();
  console.log('It was a pleasure to run your function! Have a great day!');
};

const sayHello = function(){
  console.log('Hello from inside sayHello()!');
};

// runNicely( sayHello );

const arr = [1,2,3,5,6,7,10000];

const obj = {
  a: 1,
  b: 2,
  c: 3
}

//
// obj.forEach( function( elem ){
//   console.log( elem );
// });

const each = function( collection, callback ){

  if( collection instanceof Array ){
    for( let i = 0; i < collection.length; i++ ){
      // Invoke (call) the callback we were given, passing in the elem value and index as args
      callback( collection[i], i );
    }
  } else {
    // assume we have been passed an object
    const keys = Object.keys( collection );
    for( let i = 0; i < keys.length; i++ ){
      const key = keys[i];
      // Invoke (call) the callback we were given, passing in the key and value as args
      callback( key, collection[key] );
    }
  }

};


// each(obj, function( k, v ){
//   console.log(`key: ${ k },  val: ${ v }`);
// });

// each(arr, function( elem ){
//   console.log( elem );
// });


// Add this each() method to the prototype for every object,
// which lets us use the syntax myArray.each(callback) or myObj.each(callback)
// NOTE that for this to work, we need to use the `this` keyword, which
// is how we talk about the object which the .each is called on
// (i.e. myArray or myObj in the above example)
Object.prototype.each = function( callback ){

  // check if the object this method was called on is an Array
  if( this instanceof Array ){
    for( let i = 0; i < this.length; i++ ){
      callback( this[i], i );
    }
  } else {
    // otherwise assume the method was called on is a standard object
    const keys = Object.keys( this );
    for( let i = 0; i < keys.length; i++ ){
      const key = keys[i];
      callback( key, this[ key ] );
    }
  }

};

// obj.each(function( k, v ){
//   console.log( k, v );
// });

///////////////////////// End callback review


$(document).ready(function(){

  $('#getNewFact').on('click', getFact);

});


const getFact = function(){

  let fact;
  const xhr = new XMLHttpRequest();

  // xhr.onreadystatechange = function(){
  //   console.log('Ready state changed: ', xhr.readyState )
  //   console.log('response: ',  xhr.response );
  //   if( xhr.readyState !== 4 ){
  //     return;
  //   }
  //
  //   // do something with xhr.response here, it's now ready to use
  // };

  xhr.onload = function(){

    // Turn the JSON response string into a real Javascript object
    const fact = JSON.parse( xhr.response );
    // console.log( fact );

    // update the DOM
    $p = $('<p>').html( fact.text );
    $('#facts').append($p);
  };

  xhr.open('GET', 'http://numbersapi.com/random/trivia?json');
  xhr.send();

  console.log('Finished request');
};
