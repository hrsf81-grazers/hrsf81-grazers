module.exports = {
  bindings: {
    user: '<',
    changeView: '<'
  },
  controller(groups) {
    this.event = 'Grazers Con';
    groups.get()
      .then((groupsData) => {
        this.groups = groupsData;
      })
      .catch(console.error);
  },
  templateUrl: 'controlPanel.template.html'
};
