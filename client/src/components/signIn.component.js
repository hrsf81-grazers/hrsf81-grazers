module.exports = {
  bindings: {
    signIn: '<'
  },
  controller: function() {
    this.user = '';
    this.role = '';

    // this.signIn = (user, role) => {
    //   console.log(user);
    //   console.log(role);
    // };
  },
  template: `
    <h1>Welcome to Event HUD!</h1>
    <form class="signin-form" ng-submit="$ctrl.signIn($ctrl.user, $ctrl.role)">
      <div class="signin-input">
        <label for="signin-user-name">What is your name?</label>
        <input id="signin-user-name" type="text" ng-model="$ctrl.user"></input>
      </div>
      <div class="signin-input">
        <label for="role-select">Choose your role: </label>
        <select id="role-select" required ng-model="$ctrl.role">
          <option>Organizer</option>
          <option>Staff</option>
        </select>
      </div>
      <div class="signin-input">
        <button>Sign In</button>
      </div>
    </form>
  `
};
