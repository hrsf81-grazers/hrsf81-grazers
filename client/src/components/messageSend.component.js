module.exports = {
  bindings: {
    user: '<',
    group: '<'
  },
  controller(groups, websockets) {
    this.$onChanges = (changesObj) => {
      if (changesObj.group.currentValue || changesObj.user.currentValue) {
        this.clearInputs();
      }
    };

    groups.get()
      .then((groupData) => {
        this.groups = groupData;
      })
      .catch(console.error);

    this.clearInputs = () => {
      this.messageTitle = '';
      this.messageBody = '';
      this.messageTo = this.user.role === 'organizer' ? [] : [JSON.stringify([this.group.id, this.group.name])];
    };

    this.sendMessage = () => {
      const toGroupIds = [];
      const toGroupNames = [];
      this.messageTo = this.messageTo.map(toGroup => JSON.parse(toGroup));
      this.messageTo.forEach((toGroup) => {
        toGroupIds.push(toGroup[0]);
        toGroupNames.push(toGroup[1]);
      });
      websockets.send(JSON.stringify({
        toNames: toGroupNames,
        toIds: toGroupIds,
        title: this.messageTitle,
        text: this.messageBody,
        fromName: `${this.user.firstName} ${this.user.lastName}`,
        fromId: this.user.id,
        eventId: 1
      }));
      this.clearInputs();
    };
  },
  templateUrl: 'messageSend.template.html'
};
