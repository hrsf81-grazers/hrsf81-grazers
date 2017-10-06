module.exports = {
  bindings: {
    signIn: '<'
  },
  controller($http) {
    this.user = '';

    $http({
      method: 'GET',
      url: '/users'
    })
      .then(response => response.data)
      .then((users) => {
        this.users = users;
      })
      .catch(console.error);
  },
  templateUrl: 'signIn.template.html'
};
