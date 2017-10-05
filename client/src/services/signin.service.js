function signIn($location) {
  this.signedInUser = '';
  this.signedInRole = '';

  this.getUser = () => {
    return {
      name: this.signedInUser,
      role: this.signedInRole
    };
  };

  this.submit = () => {
    return (name, role) => {
      this.signedInUser = name;
      this.signedInRole = role;
      if (role === 'Organizer') {
        $location.path('/organizer');
      } else if (role === 'Staff') {
        $location.path('/staff');
      }
    };
  };
}

module.exports = signIn;
