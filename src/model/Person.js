class PersonController {
  constructor($scope) {
    this.scope = $scope;
    this.signedIn = true; // signed in by default for now
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
