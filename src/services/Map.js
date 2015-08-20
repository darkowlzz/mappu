function MapService () {
  let map, marker = null;

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

    // Go to the given coordinates and open a popup bubble.
    gotoCoord: function gotoCoord (lat, lng, zoom = 13) {
      this.removeExistingMarker();
      this.goto(lat, lng, zoom);
      marker = new L.marker([lat, lng]);
      map.addLayer(marker);
      marker.bindPopup('You are here now').openPopup();
    },

    // Automatically locate.
    locate: function locate (zoom = 16) {
      map.locate({setView: true, maxZoom: zoom});
    },

    // Mark a place on map by clicking
    markOnMap: function markOnMap () {
      let that = this;
      map.on('click', function onMapClick (e) {
        that.removeExistingMarker();
        if ((e.latlng.lat > 12.7300) && (e.latlng.lat < 13.1800) &&
            (e.latlng.lng > 77.3800) && (e.latlng.lng < 77.7500)) {
          marker = new L.marker(e.latlng);
          map.addLayer(marker);
          marker.bindPopup("You are here now").openPopup();
          map.setView(e.latlng, 13);
        } else {
          alert('This location is out of Bengaluru');
        }
        map.off('click', onMapClick);
        document.getElementById('map').style.cursor = "default";
      } );
    },

    // Remove an existing marker on map.
    removeExistingMarker: function removeExistingMarker () {
      if (marker) {
        map.removeLayer(marker);
      }
    }
  }
}

export { MapService };
