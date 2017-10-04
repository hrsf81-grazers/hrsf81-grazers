module.exports = {
  controller: function() {
    this.view = 'broadcast';

    this.changeView = (view) => {
      this.view = view;
    };

  },
  template: `
    <control-panel change-view="$ctrl.changeView"></control-panel>
    <event-broadcast ng-if="$ctrl.view === 'broadcast'"></event-broadcast>
    <manage-group ng-if="$ctrl.view === 'manageGroup'"></manage-group>
    <div class="right-sidebar col-md-3">
      <h3>Component for event information</h3>
    </div>
  `
};
