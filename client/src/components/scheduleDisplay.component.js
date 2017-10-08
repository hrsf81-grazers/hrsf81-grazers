module.exports = {
  bindings: {
    heading: '@',
    schedule: '<'
  },
  controller() {
    this.selectedIndex = 0;
  },
  templateUrl: 'scheduleDisplay.template.html'
};
