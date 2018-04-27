
let $body;
let hueCounter = 0;

let lastMouseX = 0;
let lastMouseY = 0;

const randRange = function( max ){
  return parseInt( Math.random() * max );
};

const createBlob = function( x, y, size=100 ){
  // console.log(x, y);
  const $blob = $('<div class="blob"></div>');
  // const r = randRange(255);
  // const g = randRange(255);
  // const b = randRange(255);
  // const colour = `rgb(${ r }, ${ g }, ${ b })`;
  const h = hueCounter;
  const s = '100%';
  const l = '50%';
  const colour = `hsl(${h}, ${s}, ${l}  )`;

  // hueCounter += 0.5;   // hueCounter++;
  // if( hueCounter > 255 ){
  //   hueCounter = 0;
  // }
  hueCounter = (hueCounter + 1) % 255;

  // calculate size based on mouse velocity
  const velocityX = Math.abs(x - lastMouseX);
  const velocityY = Math.abs(y - lastMouseY);

  // console.log('velocityX', velocityX, 'velocityY', velocityY);
  // console.log({velocityX: velocityX, velocityY: velocityY});
  // console.log({velocityX, velocityY});

  lastMouseX = x;
  lastMouseY = y;

  size = velocityX;

  $blob.css({
    backgroundColor: colour,
    width:  size + 'px',
    height: size + 'px',
    top:  (y - size/2) + 'px',  // center over mouse
    left: (x - size/2) + 'px'
  });
  return $blob;
};


$(document).ready(function(){
  // Code which relies on the DOM goes here

  $body = $('body');
  console.log( 'body: ', $body.length );

  $(document).on('mousemove', function( event ){
    // console.log( event );

    // if( event.shiftKey === false)
    if( !event.shiftKey ) {
      return;
    }

    const $newBlob = createBlob( event.pageX, event.pageY, 50 );

    $body.append( $newBlob );

    if( Math.random() > 0.5 ){

      $newBlob.animate({
        top: '-300px'
      }, 1000 + randRange(3000), function(){
        $(this).remove();
      });

    } else {

      $newBlob.animate({
        top: (window.innerHeight + 300) + 'px',
      }, 1000 + randRange(3000), function(){
        $(this).remove();
      });

    }

  });  // end of document click handler



}); // end of document ready handler
