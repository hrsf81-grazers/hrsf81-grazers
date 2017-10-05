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
      websockets.send(JSON.stringify({
        to: this.messageTo,
        title: this.messageTitle,
        text: this.messageBody,
        from: this.user.id
      }));
      this.clearInputs();
    };
  },
  template: `
    <label for="compose-message-to">To</label>
    <form ng-submit="$ctrl.sendMessage()">
      <select id="group-select" class="form-input" required multiple ng-model="$ctrl.messageTo">
        <option ng-repeat="group in $ctrl.groups track by group.id" value="{{group.id}}">{{group.name}}</option>
      </select>
      <label for="compose-message-title">Message Title</label>
      <input id="compose-message-title" class="form-input" autocomplete="off" ng-model="$ctrl.messageTitle"/>
      <label for="compose-message-body">Message</label>
      <textarea id="compose-message-body" class="form-input" rows="5" cols="75" autocomplete="off" ng-model="$ctrl.messageBody"></textarea>
      <button>Send</button>
    </form>
  `
};
