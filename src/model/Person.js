class PersonController {
  constructor($scope) {
    this.scope = $scope;
    this.signedIn = false;
    this.username = 'anonymous';

    let that = this;

    window.onSignIn = function onSignIn(googleUser) {
      console.log('signing in');
      let profile = googleUser.getBasicProfile();
      let auth_token = googleUser.getAuthResponse();
      console.log(profile.getId());
      console.log(profile.getName());
      console.log(auth_token);
      that.scope.$apply(function() {
        that.signedIn = true;
        that.username = profile.getName();
      });
    }

    let map = L.map('map', {zoomControl: false}).setView([12.9729, 77.5882], 13);
    /*
    L.tileLayer('http://{s}.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png', {
        subdomains: ['otile1','otile2','otile3','otile4']
        }).addTo(map);
    */
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZGFya293bHp6IiwiYSI6IjNlNzMyNjAxNzg5MjY3MGRhZDY1OWQ2YzMxMDQ2MzVjIn0.PRWXV8RkEyAtFr7K4dZDgw', {
      id: 'darkowlzz.94db14bd'
    }).addTo(map);

    map.addControl(L.control.zoom({position: 'bottomleft'}));

  }

  signOut() {
    console.log('signing out');
    let auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      this.scope.$apply(() => {
        this.signedIn = false;
      });
    });
  }

}

PersonController.$inject = ['$scope'];

export { PersonController };
