module.exports = {
  bindings: {
    groupID: '<'
  },
  controller(groups) {
    const groupID = 2;
    groups.getMembers(groupID)
      .then((groupsData) => {
        this.members = groupsData;
      })
      .catch(console.error);
    this.clearInputs = () => {
      this.firstName = '';
      this.lastName = '';
      this.email = '';
      this.lastName = '';
    };
  },
  templateUrl: 'manageGroup.template.html'
};
