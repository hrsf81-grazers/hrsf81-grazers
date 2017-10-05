function signIn($location) {
  this.user = null;

  this.getUser = () => this.user;

  this.submit = () =>
    (user) => {
      this.user = JSON.parse(user);
      $location.path(`/${this.user.role}`);
    };
}

module.exports = signIn;
