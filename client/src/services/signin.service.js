function signIn($location) {
  this.user = null;

  this.getUser = () => {
    return this.user;
  };

  this.submit = () => {
    return (user) => {
      this.user = JSON.parse(user);
      $location.path(`/${this.user.role}`);
    };
  };
}

module.exports = signIn;
