module.exports = {
  bindings: {
    user: '<'
  },
  controller(groups, websockets) {
    groups.get()
      .then((groupData) => {
        this.groups = groupData;
      })
      .catch(console.error);

    this.clearInputs = () => {
      this.messageTitle = '';
      this.messageBody = '';
      this.messageTo = '';
    };
    this.clearInputs();

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
        fromId: this.user.id
      }));
      this.clearInputs();
    };
  },
  template: `
    <label for="compose-message-to">To</label>
    <form ng-submit="$ctrl.sendMessage()">
      <select id="group-select" class="form-input" required multiple ng-model="$ctrl.messageTo">
        <option ng-repeat="group in $ctrl.groups track by group.id" value="{{[group.id, group.name]}}">{{group.name}}</option>
      </select>
      <label for="compose-message-title">Message Title</label>
      <input id="compose-message-title" class="form-input" autocomplete="off" ng-model="$ctrl.messageTitle"/>
      <label for="compose-message-body">Message</label>
      <textarea id="compose-message-body" class="form-input" rows="5" cols="75" autocomplete="off" ng-model="$ctrl.messageBody"></textarea>
      <button>Send</button>
    </form>
  `
};
