module.exports = {
  bindings: {
    changeView: '<'
  },
  controller: function(groups) {
    this.activeUser = 'Christine Wong';
    this.event = 'Grazers Con';
    groups.get()
    .then(groups => this.groups = groups.map(group => group.name))
    .catch(console.error);
  },
  template: `
  <div class="control-panel col-md-2">
    <div class="active-user">{{$ctrl.activeUser}}</div>
    <ul class="control-panel-list">
      <control-panel-item label="$ctrl.event" view="broadcast" on-click="$ctrl.changeView"></control-panel-item>
      <control-panel-item ng-repeat="group in $ctrl.groups track by $index"
        label="group"
        view="manageGroup"
        on-click="$ctrl.changeView"></control-panel-item>
    </ul>
  </div>
  `
}
