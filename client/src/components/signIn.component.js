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
  template: `
    <h1>Welcome to Event HUD!</h1>
    <form class="signin-form" ng-submit="$ctrl.signIn($ctrl.user)">
      <div class="signin-input">
        <label for="signin-user-name">Who are you?</label>
        <select id="user-select" required ng-model="$ctrl.user">
          <option ng-repeat="user in $ctrl.users track by user.id" value={{user}}>{{user.firstName}} {{user.lastName}}</option>
        </select>
      </div>
      <div class="signin-input">
        <button>Sign In</button>
      </div>
    </form>
  `
};
