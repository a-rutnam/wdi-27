

// These vars need to be global so we can access them inside our AJAX .onload callback
var marker;
var map;

function initMap() {
  var myLatLng = {lat: -25.363, lng: 131.044};

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 5,
    center: myLatLng
  });

  marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Open the pod bay doors, Hal'
  });

  getISSPosition(); // Call once as soon as the map is ready to show
  setInterval(getISSPosition, 5000);  // ...then ask the API for the new position every 5 secs
}

const getISSPosition = function(){

  const xhr = new XMLHttpRequest();

  xhr.onload = function(){

    const position = JSON.parse( xhr.response );
    console.log( position );

    // Update marker on map
    // (First construct a new object with the position keys Google Maps expects)
    const coords = {
      lat: parseFloat(position.iss_position.latitude), // need to turn these strings into floats
      lng: parseFloat(position.iss_position.longitude)
    };
    marker.setPosition(coords);

    // update map to be centered over new marker position
    map.setCenter( marker.position );
  };

  xhr.open('GET', 'http://api.open-notify.org/iss-now.json');
  xhr.send();
};
