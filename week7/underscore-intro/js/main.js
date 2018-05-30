console.log('loaded JS');

const bros = ['Groucho', 'Harpo', 'Chico'];

// _(bros).each(function( elem ){
//   console.log( elem );
// });

_.each(bros, function( elem, index ){
  console.log( index, elem  );
});

console.log('--------------------');

const groucho = {
  name: 'Groucho',
  instrument: 'guitar',
  vice: 'cigars'
};

// groucho.forEach(function( item ){
//   console.log(item);
// });

_.each(groucho, function( val, key ){
  console.log(`${key}: ${val}`);
});

console.log('--------------------');

const nums = [1, 2, 3, 4, 5];

// let squares = [];
// for( let i = 0; i < nums.length; i++ ){
//   squares.push( nums[i] * nums[i] );
// }

// const squares = _.map(nums, function( elem ){
//   return  elem * elem;
// });

//ES6 arrow functions:
const squares = _.map(nums, e => e * e );


console.log( squares );

// const upcaseBros = _.map(bros, function( bro ){
//   return bro + " is a Marx brother."
// });

const upcaseBros = _.map(bros, bro => bro.toUpperCase() );

console.log( upcaseBros );

console.log('--------------------');

// const sum = _.reduce(nums, function(runningTotal, num){
//   return runningTotal + num;
// });

const sum = _.reduce(nums, (runningTotal, num) => runningTotal + num);
console.log( sum );

// Write our own .join(', ') using .reduce()
const brosCat = _.reduce(bros, (cat, str) => cat + ", " + str );
console.log( brosCat );

console.log('--------------------');

let brothers = [
  { name: 'Groucho', instrument: 'guitar', vice: 'cigars',  age: 44 },
  { name: 'Harpo', instrument: 'harp', vice: 'mutism',      age: 42 },
  { name: 'Chico', instrument: 'guitar', vice: 'infidelity', age: 39 }
];

// .findWhere: just like ActiveRecord .find_by
//   (returns the first object which matches the specified key values)
const guitarist = _.findWhere(brothers, { instrument: 'guitar' });
console.log('guitarist:', guitarist);

// .where:  just like ActiveRecord .where
//   (returns an array of ALL objects which match the keys & values)
const guitarists = _.where(brothers, { instrument: 'guitar' });
console.log('all guitarists:', guitarists);


// const over40s = _.filter(brothers, function( bro ){
//   return bro.age > 40;
// });
const over40s = _.filter(brothers, bro => bro.age > 40 );

console.log('over 40 brothers:', over40s);

console.log('--------------------');

brothers = [
  { name: 'Groucho', instrument: 'guitar', vice: 'cigars',  age: 44 },
  { name: 'Harpo', instrument: 'harp', vice: 'mutism',      age: 42 },
  { name: 'Chico', instrument: 'guitar', vice: 'infidelity', age: 39 }
];

const ageOrderedBrothers = _.sortBy(brothers, 'age');
console.log('age sorted:', ageOrderedBrothers);

console.log('--------------------');


const scores = [1.2, 1.9, 2.4, 2.7, 1.1, 4.3];

const groupedScores =  _.groupBy(scores, n => n > 2 );
console.log('grouped scores:', groupedScores);

const data = [1,2,3,5,11];
const allEven = _.every(data, n => n % 2 === 0 );
console.log('are they all even?', allEven);

const anyEven = _.some(data, n => n % 2 === 0 );
console.log('is any of the numbers even?', anyEven);

console.log('--------------------');

console.log( 'contains 5?', _.contains(data, 5)  );

console.log( _.pluck(brothers, 'vice') );

console.log( 'min age:', _.min(brothers, 'age') );
console.log( 'max age:', _.max(brothers, 'age') );
  
