function MapService () {
  let map;

  return {
    // Initialize the map.
    init: function init () {
      map = L.map('map', {zoomControl: false}).setView([12.9729, 77.5882], 13);
      /**
       * ==== mapquest tiles ====
      L.tileLayer('http://{s}.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png', {
          subdomains: ['otile1','otile2','otile3','otile4']
          }).addTo(map);
      */
      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZGFya293bHp6IiwiYSI6IjNlNzMyNjAxNzg5MjY3MGRhZDY1OWQ2YzMxMDQ2MzVjIn0.PRWXV8RkEyAtFr7K4dZDgw', {
        id: 'darkowlzz.94db14bd'
      }).addTo(map);

      map.addControl(L.control.zoom({position: 'bottomleft'}));
    },

    // Go to a given latitude and longitude.
    goto: function goto (lat, lng, zoom = 13) {
      map.setView([lat, lng], zoom);
    },

    // Automatically locate.
    locate: function locate (zoom = 16) {
      console.log('locating...');
      map.locate({setView: true, maxZoom: zoom});
    }
  }
}

export { MapService };
