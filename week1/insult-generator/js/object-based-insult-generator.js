const insultGenerator = {
  firstAdjectives: [
    'artless',
    'bawdy',
    'beslubbering',
    // 'bootless',
    // 'churlish',
    // 'cockered',
    // 'clouted',
    // 'craven',
    // 'currish',
    // 'dankish',
    // 'dissembling',
    // 'droning',
    // 'errant',
    // 'fawning',
    // 'fobbing',
    // 'froward',
    // 'frothy',
    // 'gleeking',
    // 'goatish',
    // 'gorbellied',
    // 'impertinent',
    // 'infectious',
    // 'jarring',
    // 'loggerheaded',
    // 'lumpish',
    // 'mammering',
    // 'mangled',
    // 'mewling',
    // 'paunchy',
    // 'pribbling',
    // 'puking',
    // 'puny',
    // 'qualling',
    // 'rank',
    // 'reeky',
    // 'roguish',
    // 'ruttish',
    // 'saucy',
    // 'spleeny',
    // 'spongy',
    // 'surly',
    // 'tottering',
    // 'unmuzzled',
    // 'vain',
    // 'venomed',
    // 'villainous',
    // 'warped',
    // 'wayward',
    // 'weedy',
    // 'yeasty'
  ],
  secondAdjectives: [
    'base-court',
    'bat-fowling',
    'beef-witted',
    'beetle-headed',
    'boil-brained',
    'clapper-clawed',
    'clay-brained',
    'common-kissing',
    'crook-pated',
    'dismal-dreaming',
    'dizzy-eyed',
    'doghearted',
    'dread-bolted',
    'earth-vexing',
    'elf-skinned',
    'fat-kidneyed',
    'fen-sucked',
    'flap-mouthed',
    'fly-bitten',
    'folly-fallen',
    'fool-born',
    'full-gorged',
    'guts-griping',
    'half-faced',
    'hasty-witted',
    'hedge-born',
    'hell-hated',
    'idle-headed',
    'ill-breeding',
    'ill-nurtured',
    'knotty-pated',
    'milk-livered',
    'motley-minded',
    'onion-eyed',
    'plume-plucked',
    'pottle-deep',
    'pox-marked',
    'reeling-ripe',
    'rough-hewn',
    'rude-growing',
    'rump-fed',
    'shard-borne',
    'sheep-biting',
    'spur-galled',
    'swag-bellied',
    'tardy-gaited',
    'tickle-brained',
    'toad-spotted',
    'unchin-snouted',
    'weather-bitten'
  ],
  nouns:  [
    'apple-john',
    'baggage',
    'barnacle',
    'bladder',
    'boar-pig',
    'bugbear',
    'bum-bailey',
    'canker-blossom',
    'clack-dish',
    'clotpole',
    'coxcomb',
    'codpiece',
    'death-token',
    'dewberry',
    'flap-dragon',
    'flax-wench',
    'flirt-gill',
    'foot-licker',
    'fustilarian',
    'giglet',
    'gudgeon',
    'haggard',
    'harpy',
    'hedge-pig',
    'horn-beast',
    'hugger-mugger',
    'joithead',
    'lewdster',
    'lout',
    'maggot-pie',
    'malt-worm',
    'mammet',
    'measle',
    'minnow',
    'miscreant',
    'moldwarp',
    'mumble-news',
    'nut-hook',
    'pigeon-egg',
    'pignut',
    'puttock',
    'pumpion',
    'ratsbane',
    'scut',
    'skainsmate',
    'strumpet',
    'varlot',
    'vassal',
    'whey-face',
    'wagtail'
  ],

  alreadyUsed: {},

  generateRandomInt: function( max ){
    const random = Math.random() * max;
    return Math.floor( random );  // remove the decimal expansion of the number (i.e. return an int)
  },

  getRandomElement: function( array ){
    const randomIndex = this.generateRandomInt( array.length );
    return array[ randomIndex ];
  },

  generateInsult: function( numberOfInsults=1 ){

    for( let i = 0; i < numberOfInsults; i++ ){

      let firstAdjective = this.getRandomElement( this.firstAdjectives );

      // use a loop to keep randomly selecting new adjectives until we get a new one
      let retries = 0;
      while( firstAdjective in this.alreadyUsed ){

        console.log(`Found already used phrase: ${firstAdjective}`);
        firstAdjective = this.getRandomElement( this.firstAdjectives );

        retries++;  // retries = retries + 1;
        if( retries >  this.firstAdjectives.length ){
          console.log('Too many retries');
          break;  // exit the loop if we've tried enough (avoid an infinite loop)
        }

      }

      // check if this phrase has already appeared in an insult
      //
      // if( firstAdjective in this.alreadyUsed ) {
      //   // we found the string as a key of the object, meaning it has already been used...
      //   // so pick a new one
      //   console.log(`Found already used phrase: ${firstAdjective}`);
      //   firstAdjective = this.getRandomElement( this.firstAdjectives );
      // }

      this.alreadyUsed[ firstAdjective ] = true;

      const secondAdjective = this.getRandomElement( this.secondAdjectives );
      this.alreadyUsed[ secondAdjective ] = true;

      const noun = this.getRandomElement( this.nouns );
      this.alreadyUsed[ noun ] = true;

      console.log(`Thou ${ firstAdjective } ${ secondAdjective } ${ noun }!`);
    }

  } // end generateInsult()


};

insultGenerator.generateInsult(3);
