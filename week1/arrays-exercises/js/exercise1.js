// Your top choices
//
// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.
//

const dogs = [
  'Novia Scotia Duck Tolling Retriever',
  'Leonberger',
  'Husky',
  'Golden Retriever',
  'Chilean Terrier'
];

const suffixes = ['st', 'nd', 'rd', 'th', 'th', 'th' ];

for( let i = 0; i < dogs.length; i++ ){
  const ending = suffixes[i];
  console.log(`My ${ i+1 }${ ending } choice is ${dogs[i]}.`);

}
