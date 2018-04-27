
const toggleElements = $('#toggle');
console.log('toggle count:', toggleElements.length);

$(document).on('keydown', function( event ){
  console.log(event.key);
});


$('#kitty').on('mousemove', function( event ){
  console.log(event.offsetX, event.offsetY);
});

$('#kitty').on('mouseenter', function( event ){
  console.log('mouseenter', event);
})

$('input').eq(0).on('focus', function( event ){
  console.log('focused!');
});

$('input').eq(0).on('blur', function(){
  console.log('blurred!');
});

// form validation!
$('form').on('submit', function( event ){
  console.log('submit!');

  const inputContents = $('input').eq(0).val();

  console.log('form field contents:', inputContents);

  if(inputContents.length === 0){
    console.log('please enter valid data');
    return false;
  }

  return true;
});


$('#toggle').on('click', function(){
  $('.triple-kitty1').eq(0).toggle();
});

$('#fade').on('click', function(){
  $('.triple-kitty2').fadeToggle(5000);
});
