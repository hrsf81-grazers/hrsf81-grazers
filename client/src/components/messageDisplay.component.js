module.exports = {
  bindings: {
    user: '<',
    group: '<'
  },
  controller(websockets) {
    this.messages = [];

    this.displayMessage = (message) => {
      const messageNode = document.createElement('li');
      messageNode.className = 'message';

      const messageParts = ['fromName', 'title', 'text'];
      messageParts.forEach((part) => {
        const messagePartNode = document.createElement('div');
        messagePartNode.textContent = message[part];
        messageNode.appendChild(messagePartNode);
      });

      return messageNode;
    };

    this.receive = (event) => {
      console.log(`Message from the server ${event.data}`);
      const message = JSON.parse(event.data);
      const isBroadcast = this.user.role === 'organizer' && message.fromId === this.user.id;
      if (isBroadcast || message.toIds.includes(this.group.id)) {
        this.messages.push(message);
      }
    };

    websockets.receive(this.receive);
  },
  templateUrl: 'messageDisplay.template.html'
};
