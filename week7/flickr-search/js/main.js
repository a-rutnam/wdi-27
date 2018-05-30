
const state = {
  page: 1
};

$(document).ready(() => {

  $('#searchForm').on('submit', () => {

    $('#images').empty();

    const query = $('#query').val();
    searchFlickr( query );
    return false;
  });

  $('#query').focus();

});

$(window).on('scroll', () => {

  const scrollBottom = $(document).height() - ( $(window).scrollTop() + $(window).height() );
  // console.log({scrollBottom});

  if(scrollBottom > 5){
    return;
  }

  console.log('Near bottom of page...');
  searchFlickr( $('#query').val() );
});




const searchFlickr = searchQuery => {
  console.log({searchQuery}, state.page);

  $('<hr>').appendTo('#images');

  const URL = "https://api.flickr.com/services/rest/";

  $.getJSON(URL, {
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    method: 'flickr.photos.search',
    text: searchQuery,
    format: 'json',
    nojsoncallback: 1,
    page: state.page++
  })
  .done(showImages)
  .fail(errorHandler);

};

const errorHandler = xhr => {
  console.warn('Error with search request: ', xhr.responseText, xhr);
};

const showImages = data => {
  console.log(data);

  _.each(data.photos.photo, photo => {
    const imageURL = generateImageURL( photo );
    $('<img>', {src: imageURL}).appendTo('#images');
  });

};

const generateImageURL = p => {
  return `https://farm${p.farm}.staticflickr.com/${p.server}/${p.id}_${p.secret}_q.jpg`;
};
