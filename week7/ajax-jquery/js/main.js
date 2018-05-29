
$(document).ready(function(){

  // delegate click handler to entire document, and check clicked element when it is clicked
  $(document).on('click', 'img.imgResult', function(){

    // console.log( $(this).data('bookID') );
    getBookDetail( $(this).data('bookID') );  // .data() is for getting/setting custom tag attributes
  });

  $('#searchForm').on('submit', function(){
    console.log('submitted!');

    const searchQuery = $('#query').val();
    bookSearch( searchQuery );

    return false;  // prevent form from submitting, i.e. reloading the page
  });

  // $('#doSearch').on('click', function(){
  //   console.log('button clicked!');
  // });
  //
  // $('#query').on('keypress', function( ev ){
  //   // console.log( ev.key, ev.keyCode );
  //   if( ev.keyCode === 13){
  //     console.log('do search');
  //   }
  // })
});

const getBookDetail = function( id ){

  const URL = `https://www.googleapis.com/books/v1/volumes/${ id }`;

  $('#results').empty();

  $.getJSON(URL)
  .done(function( result ){
    console.log( result );

    let $details = $('<div class="details">');

    $('<h2>').html( result.volumeInfo.title ).appendTo( $details );

    if( 'authors' in result.volumeInfo && result.volumeInfo.authors.length ){
      $('<h3>').html( result.volumeInfo.authors.join(', ') ).appendTo( $details );
    }

    $('<p>').html( result.volumeInfo.description ).appendTo( $details );

    if( 'imageLinks' in result.volumeInfo ){
      const imgs = result.volumeInfo.imageLinks;
      $('<img class="imgResult">')
      .attr('src', imgs.medium || imgs.small || imgs.smallThumbnail)
      .appendTo( $details );
    }

    $('#details').append( $details );

  })
  .fail(function( xhr ){
    console.warn( xhr.responseText, xhr );
  });

};

const bookSearch = function( query ){

  const URL = 'https://www.googleapis.com/books/v1/volumes';

  $('#details').empty();
  $('#results').html('Loading results...');

  // $.getJSON(`${URL}?q=${query}`)
  // $.post(URL)
  // $.get(URL)
  // $.ajax(`${URL}?q=${query}`)
  $.ajax({
    url: URL,
    data: {
      q: query,   // gives us ?q=Ulysses on the end of the URL
    },
    dataType: 'json',
    method: 'get'
  })
  .done(function( results ){
    // success function
    console.log( 'results:', results );

    $('#results').empty();

    results.items.forEach( function( item ){

      $result = $('<div class="result">');

      $('<h3>').html( item.volumeInfo.title ).appendTo($result);

      if( 'imageLinks' in item.volumeInfo ){
        $('<img class="imgResult">')
        .attr('src', item.volumeInfo.imageLinks.smallThumbnail)
        .data('bookID', item.id)
        .appendTo($result);
      }

      if( 'authors' in item.volumeInfo && item.volumeInfo.authors.length ){
        const authors = item.volumeInfo.authors.join(', ');
        $('<p>').html(`Author(s): ${ authors }`).appendTo($result);
      }

      $('<hr>').appendTo($result);

      $('#results').append( $result );
    });



  })
  .fail(function( xhr, err ){
    // fail function (for low-level i.e. network errors)
    console.error( xhr.responseText, xhr.status, err );
  });


};
