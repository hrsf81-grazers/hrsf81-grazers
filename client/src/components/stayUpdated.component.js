module.exports = {
  bindings: {
    user: '<'
  },
  template: `
    <group-membership user="$ctrl.user"></group-membership>
    <event-broadcast></event-broadcast>
    <div class="right-sidebar col-md-3">
      <h3>Component for event information</h3>
    </div>
  `
};
