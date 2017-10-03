function websockets() {
  this.socket = new WebSocket(`ws://${window.location.host}/`);

  this.send = function(message) {
    this.socket.send(message);
  };

  this.receive = function(callback) {
    this.socket.addEventListener('message', callback);
  };
}

module.exports = websockets;
