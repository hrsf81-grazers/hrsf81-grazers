module.exports = {
  bindings: {
    user: '<',
    group: '<',
    changeView: '<'
  },
  controller(groups) {
    groups.getMembers(1)
      .then((groupsData) => {
        this.members = groupsData;
      })
      .catch(console.error);
  },
  templateUrl: 'manageGroup.template.html'
};
