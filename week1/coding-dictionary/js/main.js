
const dict = {

  // Store all our words and definitions in a nested array inside dict.
  // This is so they don't get mixed up with the methods in the object,
  // and we can iterate over them specifically
  definitions: {
    method: 'a function which is defined inside an object',
    variadic: 'a variadic function accepts a variable number of arguments',
    scope: 'the visibility or lifetime of a variable within a program',
  },

  lookupWord: function( word ){
    if( word in this.definitions ){
      // return from the method a string including the word and its definition
      //return `${word}: ${ this.definitions[ word ] }`;

      // variation: return from the method an object with word and definition keys
      return { word: word, definition: this.definitions[word] };
    } else {
      return `No entry for ${ word }, sorry.`
    }
  },

  getTerms: function(){
    // this method just wraps the Object.keys() method to return an array of keys (our words)
    return Object.keys( this.definitions );
  },

  addDefinition: function(word, definition){
    if( word in this.definitions ) {
      return `${word} is already defined as: ${ this.definitions[ word ] }`;
    } else {
      this.definitions[ word ] = definition;  // set the new key and value
      return `Added ${word}: ${definition}.`;
    }
  },

  printAllDefinitions: function(){
    let totalDefinitions = 0;
    // loop over all the keys in the definitions nested object and print their values
    for( let key in this.definitions ){
      console.log(`${ key }: ${ this.definitions[key] }`);
      totalDefinitions++;
    }
    console.log(`Total entries: ${ totalDefinitions }`);
  },

};

dict.printAllDefinitions();

dict.lookupWord('method');

dict.addDefinition('closure', "don't ask");
