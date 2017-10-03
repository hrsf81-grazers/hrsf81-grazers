module.exports = {
  controller: function(websockets) {
    this.receive = event => {
      console.log(`Message from the server ${event.data}`);
      const li = document.createElement('li');
      li.textContent = event.data;
      document.getElementById('messages').appendChild(li);
    };
    websockets.receive(this.receive);
  },
  template: `
    <div>
      <h3>Messages</h3>
      <ul id="messages"></ul>
    </div>
  `
};
