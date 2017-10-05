module.exports = {
  bindings: {
    user: '<',
    group: '<'
  },
  controller(groups) {
    this.$onInit = function init() {
      groups.getMembers()
        .then((members) => {
          this.members = members;
        })
        .catch(console.error);
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
