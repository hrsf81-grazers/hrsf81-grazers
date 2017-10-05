module.exports = {
  bindings: {
    user: '<',
    group: '<'
  },
  controller(groups) {
    this.$onChanges = function bound() {
      if (this.group) {
        groups.getMembers(this.group.id)
          .then((members) => {
            this.members = members.filter(member => member.id !== this.user.id);
          })
          .catch(console.error);
      }
    };
  },
  template: `
  <div class="control-panel col-md-2">
    <div class="active-user">{{$ctrl.user.firstName}} {{$ctrl.user.lastName}}</div>
    <ul class="member-list">
      <li ng-repeat="member in $ctrl.members track by member.id">{{member.firstName}} {{member.lastName}}</li>
    </ul>
  </div>
  `
};
