var map;
function initialize() {
  map = new google.maps.Map(
    document.getElementById('map-canvas'), {
      zoom: 8,
      center: {
        lat: 23.9738746,
        lng: 120.982017
      }
    }
  );

  map.data.loadGeoJson('data/14391551.json');
}

google.maps.event.addDomListener(window, 'load', initialize);