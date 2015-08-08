class PersonController {
  constructor($scope, $modal, map) {
    this.scope = $scope;
    this.modal = $modal;

    // Initialize the map.
    map.init();

    this.scope.animationsEnabled = true;
    this.signedIn = false;
    this.username = 'anonymous';

    let that = this;

    window.onSignIn = function onSignIn(googleUser) {
      console.log('signing in');
      let profile = googleUser.getBasicProfile();
      let auth_token = googleUser.getAuthResponse();
      /*
      console.log(profile.getId());
      console.log(profile.getName());
      console.log(auth_token);
      */
      that.scope.$apply(function() {
        that.signedIn = true;
        that.username = profile.getName();
      });
    }
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

  open() {
    let modalInstance = this.modal.open({
      animation: true,
      templateUrl: 'modalView.html',
      controller: 'ModalInstanceCtrl',
      size: 'lg'
    })
  }

}

PersonController.$inject = ['$scope', '$modal', 'map'];

export { PersonController };
