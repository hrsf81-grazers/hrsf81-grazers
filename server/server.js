const express = require('express');
const app = express();
const port = process.env.PORT || '3000';
const bodyParser = require('body-parser');
const stub = require('./stubData.js');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/events', (req, res) => {
  res.status(200).send(stub.events);
});

app.post('/events', (req, res) => {
  const newEventObj = req.body;
  res.status(201).send(newEventObj);
});

app.put('/event/:eventId', (req, res) => {
  const updatedEventObj = req.body;
  updatedEventObj.id = req.params.eventId;
  res.status(200).send(updatedEventObj);
});

app.get('/event/:eventId/groups', (req, res) => {
  const eventId = req.params.eventId;
  res.status(200).send(stub.groups);
});

app.post('/event/:eventId/groups', (req, res) => {
  const newGroupObj = req.body;
  newGroupObj.eventId = req.params.eventId;
  res.status(201).send(newGroupObj);
});

app.get('/event/:eventId/users', (req, res) => {
  const eventId = req.params.eventId;
  res.status(200).send(stub.users);
});

app.get('/group/:groupId/users', (req, res) => {
  const groupId = req.params.groupId;
  const groupUsers = stub.userGroups.filter(userGroup =>
    userGroup.groupId === groupId);
  const users = groupUsers.map(groupUser => {
    for (let id in stub.users) {
      if (id === groupUser.userId) {
        return stub.users[id];
      }
    }
  });
  res.status(200).send(users);
});

app.post('/group/:groupId/users', (req, res) => {
  const groupId = req.params.groupId;
  const users = req.body;
  let dummyUserId = 6;
  const userGroups = users.map(user => {
    return {
      groupId: groupId,
      userId: dummyUserId++
    };
  });
  res.status(201).send(userGroups);
});

app.delete('/group/:groupId/user/:userId', (req, res) => {
  const groupId = req.params.groupId;
  const usersId = req.params.userId;
  const groupUsers = stub.userGroups.filter(userGroup =>
    userGroup.groupId === groupId && userGroup.userId !== userId);
  const users = groupUsers.map(groupUser => {
    for (let id in stub.users) {
      if (id === groupUser.userId) {
        return stub.users[id];
      }
    }
  });
  res.status(200).send(users);
});

app.put('/user/:userId', (req, res) => {
  const updatedUserObj = req.body;
  updatedUserObj.userId = req.params.userId;
  res.status(201).send(userGroups);
});

app.get('/event/:eventId/messages', (req, res) => {
  const eventId = req.params.eventId;
  res.status(200).send(stub.messages);
});


app.listen(port, () => {
  console.log(`Event HUD server running on port ${port}`);
});
