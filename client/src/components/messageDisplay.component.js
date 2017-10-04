module.exports = {
  controller: function(websockets) {

    this.displayMessage = message => {
      const messageNode = document.createElement('li');
      messageNode.className = 'message';

      const messageParts = ['to', 'from', 'title', 'text'];
      messageParts.forEach(part => {
        const messagePartNode = document.createElement('div');
        messagePartNode.textContent = message[part];
        messageNode.appendChild(messagePartNode);
      });

      return messageNode;
    };

    this.receive = event => {
      console.log(`Message from the server ${event.data}`);
      const message = this.displayMessage(JSON.parse(event.data));
      document.getElementById('messages').appendChild(message);
    };

    websockets.receive(this.receive);
  },
  template: `
    <ul id="messages"></ul>
  `
};
