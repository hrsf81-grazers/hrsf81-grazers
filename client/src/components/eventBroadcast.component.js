module.exports = {
  bindings: {
    user: '<'
  },
  template: `
    <div class="container col-md-7">
      <div class="message-display">
        <message-display></message-display>
      </div>
      <div id="send-message-form">
        <message-send user="$ctrl.user"></message-send>
      </div>
  </div>
  `
};
