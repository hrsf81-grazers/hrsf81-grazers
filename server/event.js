const express = require('express');
const router = express.Router();
const stub = require('./stubData.js');

router.use((req, res, next) => {
  console.log('Handing /event routes');
  next();
});

router.route('/:eventId')
  .get((req, res) => {
    const eventId = Number(req.params.eventId);
    res.status(200).send(stub.events[0]);
  })
  .put((req, res) => {
    const updatedEventObj = req.body;
    updatedEventObj.id = Number(req.params.eventId);
    res.status(200).send(updatedEventObj);
  });

router.route('/:eventId/groups')
  .get((req, res) => {
    const eventId = Number(req.params.eventId);
    res.status(200).send(stub.groups);
  })
  .post((req, res) => {
  const newGroupObj = req.body;
  newGroupObj.eventId = Number(req.params.eventId);
  res.status(201).send(newGroupObj);
});

router.route('/:eventId/messages')
  .get((req, res) => {
    const eventId = Number(req.params.eventId);
    res.status(200).send(stub.messages);
  })
  .post((req, res) => {
    const recipients = req.body.toList;
    const messageSends = recipients.map(recipient => {
      return {
        messageId: 5,
        recipientType: recipient.type,
        recipientId: recipient.id
      }
    });
    res.status(201).send(messageSends);
  });

router.get('/:eventId/users', (req, res) => {
  const eventId = Number(req.params.eventId);
  res.status(200).send(stub.users);
});

module.exports = router;
