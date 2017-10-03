const express = require('express');
const app = express();
const port = process.env.PORT || '3000';
const bodyParser = require('body-parser');
const event = require('./event');
const group = require('./group');
const user = require('./user');
const message = require('./message');
const stub = require('./stubData');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.static(__dirname + '/../node_modules'));
app.use('/event', event);
app.use('/group', group);
app.use('/user', user);
app.use('/message', message);

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

if ( module.parent ) {
  module.exports = app;
} else {
  app.listen(port, () => {
    console.log(`Event HUD server running on port ${port}`);
  });  
}

