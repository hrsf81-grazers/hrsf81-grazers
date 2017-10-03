module.exports = {
  controller: function(websockets) {
    this.message = '';
    this.sendMessage = function() {
      websockets.send(this.message);
      this.message = '';
    };
  },
  template: `
    <div>
      <form id="send-message-form" ng-submit="$ctrl.sendMessage()">
        <input id="compose-message" autocomplete="off" ng-model="$ctrl.message"/>
        <button>Send</button>
      </form>
    </div>
  `
};
