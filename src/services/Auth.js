function AuthService ($rootScope, $window, Session, AUTH_EVENTS) {
  return {
    login: function login () {
      $window.onSignIn = function onSignIn(googleUser) {
        let profile = googleUser.getBasicProfile();
        let auth_token = googleUser.getAuthResponse();

        // Store to sessionStore when not using 3rd party auth
        //$window.sessionStorage['userInfo'] = JSON.stringify({name: profile.getName()});
        Session.create(profile.getName());
        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
      }
    },

    // NOTE: Use this when not using 3rd party auth.
    /*
    isAuthenticated: function isAuthenticated () {
      return !!Session.user;
    },
    */

    isAuthorized: function isAuthorized () {
    
    },

    logout: function logout () {
      let auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(() => {
        Session.destroy();
        //$window.sessionStorage.removeItem('userInfo');
        $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
      });

    }
  }
}

AuthService.$inject = ['$rootScope', '$window', 'Session', 'AUTH_EVENTS']

export { AuthService };
