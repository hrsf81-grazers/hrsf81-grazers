function websockets() {
  const HOST = window.location.origin.replace(/^http/, 'ws');
  this.socket = new WebSocket(HOST);

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
