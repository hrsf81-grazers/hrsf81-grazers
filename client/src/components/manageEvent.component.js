module.exports = {
  bindings: {
    user: '<'
  },
  controller() {
    this.view = 'broadcast';

    this.changeView = (view) => {
      this.view = view;
    };
  },
  template: `
    <control-panel user="$ctrl.user" change-view="$ctrl.changeView"></control-panel>
    <event-broadcast ng-if="$ctrl.view === 'broadcast'" user="$ctrl.user"></event-broadcast>
    <manage-group ng-if="$ctrl.view === 'manageGroup'"></manage-group>
    <event-information></event-information>
  `
};
