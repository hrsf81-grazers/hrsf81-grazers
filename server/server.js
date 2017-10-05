const path = require('path');
const express = require('express');

const app = express();
const server = require('http').Server(app);
const WebSocket = require('ws');

const port = process.env.PORT || '3000';
const wss = new WebSocket.Server({ server });

const bodyParser = require('body-parser');
const event = require('./event');
const group = require('./group');
const user = require('./user');
const message = require('./message');
const stub = require('./stubData');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(express.static(path.join(__dirname, '/../node_modules')));
app.use('/event', event);
app.use('/group', group);
app.use('/user', user);
app.use('/message', message);

wss.on('connection', (ws) => {
  console.log('New client connected');
  ws.on('message', (msg) => {
    console.log(`Received ${msg}`);
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(msg);
      }
    });
  });
});

app.route('/events')
  .get((req, res) => {
    res.status(200).send(stub.events);
  })
  .post((req, res) => {
    const newEventObj = req.body;
    res.status(201).send(newEventObj);
  });

app.get('/groups', (req, res) => {
  res.status(200).send(stub.groups);
});

app.get('/users', (req, res) => {
  res.status(200).send(stub.users);
});

app.get('/messages', (req, res) => {
  res.status(200).send(stub.messages);
});

// send back to client for route handling
app.use('/*', (req, res) => {
  res.sendFile(path.resolve('client/dist/index.html'));
});

if (module.parent) {
  module.exports = app;
} else {
  server.listen(port, () => {
    console.log(`Event HUD server running on port ${port}`);
  });
}
