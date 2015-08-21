function SessionService () {
  let user = null,
      loginService = null; // 3rd party login service like google, fb

  return {
    create: function create (username, login) {
      user = username;
      loginService = login;
    },

    destroy: function destroy () {
      user = null;
    },

    get user () {
      return user;
    },

    get loginService () {
      return loginService;
    }
  }
}

export { SessionService };
