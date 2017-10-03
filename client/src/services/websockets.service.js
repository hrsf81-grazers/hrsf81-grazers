function websockets() {
  this.socket = new WebSocket(`ws://${window.location.host}/`);

  this.send = function(message) {
    this.socket.send(message);
  }

  this.receive = function() {
    this.socket.addEventListener('message', event => {
      console.log(`Message from the server ${event.data}`);
    });
  }
}

module.exports = websockets;
