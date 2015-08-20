function startUp ($rootScope, Auth, AUTH_EVENTS, Session) {

  $rootScope.user = {
    name: null,
    signedIn: false
  };

  // Check if the user is already authenticated
  // NOTE: This is useless now. Use this when not using a 3rd party auth.
  //       Read from sessionStore, the userid and auth-token, and auth with
  //       the server.
  /*
  if (Auth.isAuthenticated()) {
    this.signedIn = true;
    this.currentUser = Session.user;
  }
  */

  // Initialize login listeners
  Auth.login();

  // Logout function
  $rootScope.signOut = function () {
    Auth.logout();
  }

  // Listen to authentication events
  $rootScope.$on(AUTH_EVENTS.loginSuccess, setCurrentUser);
  $rootScope.$on(AUTH_EVENTS.logoutSuccess, showLogin);


  /** Event callbacks **/

  function setCurrentUser () {
    $rootScope.$apply(() => {
      $rootScope.user.signedIn = true;
      $rootScope.user.name = Session.user;
    });
  }

  function showLogin () {
    $rootScope.$apply(() => {
      $rootScope.user.signedIn = false;
      $rootScope.user.name = Session.user;
    });
  }
}

startUp.$inject = ['$rootScope', 'Auth', 'AUTH_EVENTS', 'Session'];

export { startUp };
