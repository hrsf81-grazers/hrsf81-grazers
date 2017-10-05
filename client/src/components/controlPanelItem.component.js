module.exports = {
  bindings: {
    label: '<',
    view: '@',
    onClick: '<'
  },
  template: `
    <li><div class="control-panel-item" ng-click="$ctrl.onClick($ctrl.view)">{{$ctrl.label}}</div></li>
  `
};
