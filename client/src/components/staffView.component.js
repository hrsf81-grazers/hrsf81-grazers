module.exports = {
  bindings: {
    user: '<'
  },
  controller(groups) {
    this.$onInit = function init() {
      groups.getGroup(this.user.id)
        .then((group) => {
          this.group = group;
        })
        .catch(console.error);
    };
  },
  template: `
    <group-membership user="$ctrl.user" group="$ctrl.group"></group-membership>
    <group-updates group="$ctrl.group"></group-updates>
    <div class="right-sidebar col-md-3">
      <h3>Component for event information</h3>
    </div>
  `
};
