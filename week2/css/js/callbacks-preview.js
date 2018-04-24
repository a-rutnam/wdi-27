const userA = {
  firstName: 'Grant',
  age: 28
};

const userB = {
  firstName: 'Bagi',
  age: 25
};

const printUserInfo = function( user ){
  console.log(`Name: ${ user.firstName }`);
  console.log(`Age: ${ user.age }`);
}

// pass in predefined variables (which contain objects) to our function
printUserInfo( userA );
printUserInfo( userB );

// create an object inline/on-the-fly, inside the parens for this function call
printUserInfo({
  firstName: 'Anna',
  age: 25
});

// same as above, but with functions!

let sayHello = function(){
  console.log('Hello from inside the sayHello function!');
  return true;
};

const runAnotherFunctionForMe = function( functionToRun ){
  console.log('Inside runAnotherFunctionForMe, about to run your function!');
  console.log('Your function looks like this:', functionToRun);
  console.log('Running:');
  functionToRun();
  console.log('Finished running! Thank you for using this pointless function!');
}

// runAnotherFunctionForMe( sayHello );

runAnotherFunctionForMe(function(){
  console.log('Hello from inside the anonymous function we passed in!');
  return true;
});

console.log('About to call setTimeout');
// window.setTimeout( sayHello, 3000 );

let counter = 0;
window.setInterval( function(){
  console.log('I should run three seconds later. Counter: ', counter);
  counter++;
}, 1000);

window.setInterval( sayHello, 1000 );
