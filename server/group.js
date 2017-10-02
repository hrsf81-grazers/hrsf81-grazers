const express = require('express');
const router = express.Router();
const stub = require('./stubData.js');

router.use((req, res, next) => {
  console.log('Handing /group routes');
  next();
});

router.route('/:groupId')
  .get((req, res) => {
    const groupId = Number(req.params.groupId);
    let group;
    for (let i = 0; i < stub.groups.length; i++) {
      if (stub.groups[i].id === groupId) {
        group = stub.groups[i];
      }
    }
    res.status(200).send(group);
  })
  .put((req, res) => {
    const updatedEventObj = req.body;
    updatedEventObj.id = Number(req.params.eventId);
    res.status(200).send(updatedEventObj);
  });

router.route('/:groupId/users')
  .get((req, res) => {
    const groupId = Number(req.params.groupId);
    const groupUsers = stub.userGroups.filter(userGroup =>
      userGroup.groupId === groupId);
    const users = groupUsers.map(groupUser => {
      for (let i = 0; i < stub.users.length; i++) {
        if (stub.users[i].id === groupUser.userId) {
          return stub.users[i];
        }
      }
    });
    res.status(200).send(users);
  })
  .post((req, res) => {
    const groupId = Number(req.params.groupId);
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

router.delete('/:groupId/user/:userId', (req, res) => {
  const groupId = Number(req.params.groupId);
  const usersId = Number(req.params.userId);
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

module.exports = router;
