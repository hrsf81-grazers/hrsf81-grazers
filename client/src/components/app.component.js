module.exports = {
  controller: function() {
    this.signIn = (user, role) => {
      console.log(user);
      console.log(role);
    };
  },
  template: `
    <sign-in class="sign-in" sign-in="$ctrl.signIn"></sign-in>
`
};
