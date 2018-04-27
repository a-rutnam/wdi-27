// Create an array of every link on the page using document.querySelectorAll(cssSelector)
// Iterate through the array. In each iteration of the loop:
// Find the current href using element.getAttribute(name), and store into a variable
// Generate a thumbnail URL using youtube.generateThumbnailUrl(videoUrl)
// Create an IMG element using document.createElement(tagName)
// Set the "src" of the IMG element using element.setAttribute(name, value)
// Append the IMG to the link using element.appendChild(element)

// console.log('linked', jQuery);

// const links = document.querySelectorAll( 'a' );
const $links = $( 'a' );

for( let i = 0; i < $links.length; i++ ){

  const $link = $links.eq(i);  // gives us the Nth object from the results AS A JQUERY OBJECT

  // This would give us the Nth object AS A VANILLA DOM NODE
  // i.e. no jQuery methods
  // const link = $links[i];

  const thumbnailURL = youtube.generateThumbnailUrl( $link.attr('href')  );

  //
  // // create img tag and set the src attribute to be the thumbnail URL
  // const imgTag = document.createElement( 'img' );
  // imgTag.src = thumbnailURL;
  // link.appendChild( imgTag );

  const $imgTag = $('<img>', {src: thumbnailURL}); //.attr('src', thumbnailURL);
  $link.append( $imgTag );
}

// looping over jQuery results using .each() and $(this)
$links.each(function(){
  const thumbnailURL = youtube.generateThumbnailUrl( $(this).attr('href')  );
  const $imgTag = $('<img>', {src: thumbnailURL, alt: 'Alt Text' }); //.attr('src', thumbnailURL);
  $(this).append( $imgTag );
});
