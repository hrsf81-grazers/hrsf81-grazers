module.exports = {
  controller: function(groups, websockets) {
    groups.get()
    .then(groups => this.groups = groups.map(group => group.name))
    .catch(console.error);

    this.clearInputs = function() {
      this.messageTitle = '';
      this.messageBody = '';
      this.messageFrom = '';
      this.messageTo = '';
    };
    this.clearInputs();

    this.sendMessage = function() {
      websockets.send(JSON.stringify({
        to: this.messageTo,
        title: this.messageTitle,
        text: this.messageBody,
        from: this.messageFrom
      }));
      this.clearInputs();
    };
  },
  template: `
    <label for="compose-message-to">To</label>
    <form ng-submit="$ctrl.sendMessage()">
      <select id="group-select" class="form-input" required multiple ng-model="$ctrl.messageTo">
        <option ng-repeat="group in $ctrl.groups track by $index">{{group}}</option>
      </select>
      <label for="compose-message-title">Message Title</label>
      <input id="compose-message-title" class="form-input" autocomplete="off" ng-model="$ctrl.messageTitle"/>
      <label for="compose-message-body">Message</label>
      <textarea id="compose-message-body" class="form-input" rows="5" cols="75" autocomplete="off" ng-model="$ctrl.messageBody"></textarea>
      <label for="compose-message-from">From</label>
      <input id="compose-message-from" class="form-input" autocomplete="off" ng-model="$ctrl.messageFrom"/>
      <button>Send</button>
    </form>
  `
};
