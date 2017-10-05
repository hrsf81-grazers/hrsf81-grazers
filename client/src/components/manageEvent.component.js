module.exports = {
  bindings: {
    user: '<'
  },
  controller() {
    // TODO: Remove hardcoding when there is proper event creation and management
    this.eventId = 1;
    this.view = 'broadcast';

    this.changeView = (view) => {
      this.view = view;
    };
  },
  template: `
    <control-panel user="$ctrl.user" change-view="$ctrl.changeView"></control-panel>
    <event-broadcast ng-if="$ctrl.view === 'broadcast'" user="$ctrl.user"></event-broadcast>
    <manage-group ng-if="$ctrl.view === 'manageGroup'"></manage-group>
    <event-information eventId="$ctrl.eventId"></event-information>
  `
};
