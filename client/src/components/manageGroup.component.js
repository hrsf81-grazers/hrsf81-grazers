module.exports = {
  bindings: {
    groupId: '<'
  },
  controller(groups) {
    this.$onChanges = (changesObj) => {
      if (changesObj.groupId.currentValue) {
        groups.getMembers(this.groupId)
          .then((groupsData) => {
            this.members = groupsData;
          })
          .catch(console.error);
      }
    };
    this.clearInputs = () => {
      this.firstName = '';
      this.lastName = '';
      this.email = '';
      this.phone = '';
    };
    this.addUser = () => {
      this.clearInputs();
    };
  },
  templateUrl: 'manageGroup.template.html'
};
