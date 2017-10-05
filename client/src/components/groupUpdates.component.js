module.exports = {
  bindings: {
    group: '<'
  },
  template: `
    <div class="container col-md-7">
      <h3>{{$ctrl.group.name}}</h3>
      <div class="message-display">
        <message-display group="$ctrl.group"></message-display>
      </div>
  </div>
  `
};
