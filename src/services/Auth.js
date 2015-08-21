function AuthService ($rootScope, $window, Session, AUTH_EVENTS) {
  return {
    login: function login () {
      $window.onSignIn = function onSignIn(googleUser) {
        let profile = googleUser.getBasicProfile();
        let auth_token = googleUser.getAuthResponse();

        // Store to sessionStore when not using 3rd party auth
        //$window.sessionStorage['userInfo'] = JSON.stringify({name: profile.getName()});
        Session.create(profile.getName(), 'google');
        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
      }

      $window.checkLoginState = function checkLoginState() {
        FB.getLoginStatus(function (response) {
          if (response.status === 'connected') {
            FB.api('/me', function (resp) {
              Session.create(resp.name, 'fb');
              $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
            });
          } else if (response.status === 'not_authorized') {
            console.log('Not logged into the app');
          } else {
            console.log('Not logged into fb');
          }
        })
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
      if (Session.loginService == 'google') {
        let auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(() => {
          Session.destroy();
          //$window.sessionStorage.removeItem('userInfo');
          $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
        });
      } else if (Session.loginService == 'fb') {
        FB.logout(function (response) {
          Session.destroy();
          $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
        });
      }
    }
  }
}

AuthService.$inject = ['$rootScope', '$window', 'Session', 'AUTH_EVENTS']

export { AuthService };
