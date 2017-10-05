module.exports = {
  controller: function() {
    this.signIn = (user, role) => {
      console.log(user);
      console.log(role);
    };
  },
  template: `
    <div ng-view></div>
`
};
