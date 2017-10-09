function websockets() {
  this.socket = new WebSocket(`ws://${window.location.host}/`);

  this.send = (message) => {
    this.socket.send(message);
  };

  this.receive = (callback) => {
    this.socket.addEventListener('message', (event) => {
      if (event.data !== 'KeepAlive') {
        callback(event);
      }
    });
  };

  // setInterval(this.send.bind(this, 'KeepAlive'), 2000);
}

module.exports = websockets;
