const express = require('express');
const router = express.Router();
const stub = require('./stubData.js');

router.use((req, res, next) => {
  console.log('Handing /user routes');
  next();
});

router.route('/:userId')
  .get((req, res) => {
    const userId = Number(req.params.userId);
    let user;
    for (let i = 0; i < stub.users.length; i++) {
      if (stub.users[i].id === userId) {
        user = stub.users[i];
      }
    }
    res.status(200).send(user);
  })
  .put((req, res) => {
    const updatedUserObj = req.body;
    updatedUserObj.id = Number(req.params.userId);
    res.status(201).send(updatedUserObj);
  });

router.get('/:userId/group', (req, res) => {
  const userId = Number(req.params.userId);
  let userGroup;
  for (let i = 0; i < stub.userGroups.length; i++) {
    if (stub.userGroups[i].userId === userId) {
      userGroup = stub.userGroups[i];
      break;
    }
  }
  let group;
  for (let i = 0; i < stub.groups.length; i++) {
    if (stub.groups[i].id === userGroup.groupId) {
      group = stub.groups[i];
      break;
    }
  }
  res.status(200).send(group);
});

module.exports = router;
