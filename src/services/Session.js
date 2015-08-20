function SessionService () {
  let user = null;

  return {
    create: function create (username) {
      user = username;
    },

    destroy: function destroy () {
      user = null;
    },

    get user () {
      return user;
    }
  }
}

export { SessionService };
