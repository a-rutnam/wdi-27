
$(document).ready(function(){

  $.ajax({
    url: '/uptime'
  })
  .done(function( data ){
    $('#uptime').text( data );  // populate the div with the plain text contents of the response
  })
  .fail(function( xhr ){
    console.log( xhr.responseText, xhr );
  });


  $.getJSON('/dogs')
  .done(function( dogs ){
    // 'dogs' is an array of objects (which is what an ActiveRecord result set renders to as JSON)
    // so we can loop over it here and output some properties from each result
    dogs.forEach(function( dog ){
      $('<li>').html(`Name: ${ dog.name }, Roundness: ${ dog.roundness }, Age: ${ dog.age }`)
      .appendTo('#dogList');
    });

  })
  .fail(function( xhr ){
    console.log( xhr.responseText, xhr );
  })


  // Update the dashboard once a second by making a new AJAX request to get the latest CPU stats
  setInterval(function(){

    $.getJSON('/hog')
    .done(function( data ){
      $('#hog').text( data.biggest_hog );   // use specific properties of the response object in our divs
      $('#time').text( data.current_time );
    })
    .fail(function( xhr ){
      console.log( xhr.responseText, xhr );
    });

  }, 1000);

});
