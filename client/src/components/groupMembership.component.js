module.exports = {
  bindings: {
    user: '<',
    group: '<'
  },
  controller(groups) {
    this.$onChanges = () => {
      if (this.group) {
        groups.getMembers(this.group.id)
          .then((members) => {
            this.members = members.filter(member => member.id !== this.user.id);
          })
          .catch(console.error);
      }
    };
  },
  templateUrl: 'groupMembership.template.html'
};
