module.exports = {
  bindings: {
    user: '<'
  },
  controller(groups) {
    // TODO: Remove hardcoding when there is proper event creation and management
    this.eventId = 1;
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
    <group-updates user="$ctrl.user" group="$ctrl.group"></group-updates>
    <event-information eventId="$ctrl.eventId" group="$ctrl.group"></event-information>
  `
};
