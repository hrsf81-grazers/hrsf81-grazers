module.exports = {
  bindings: {
    user: '<',
    group: '<'
  },
  template: `
    <div class="container col-md-7">
      <h3>{{$ctrl.group.name}}</h3>
      <div class="message-display">
        <message-display user="$ctrl.user" group="$ctrl.group"></message-display>
      </div>
      <div id="send-message-form">
        <message-send user="$ctrl.user" group="$ctrl.group"></message-send>
      </div>
  </div>
  `
};
