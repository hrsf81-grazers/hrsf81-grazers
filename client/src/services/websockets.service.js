function websockets() {
  this.socket = new WebSocket(`ws://${window.location.host}/`);

  this.send = (message) => {
    this.socket.send(message);
  };

  this.receive = (callback) => {
    this.socket.addEventListener('message', callback);
  };
}

module.exports = websockets;
