const express = require('express');
const router = express.Router();
const stub = require('./stubData.js');

router.use((req, res, next) => {
  console.log('Handing /message routes');
  next();
});

router.route('/:messageId')
  .get((req, res) => {
    const messageId = Number(req.params.messageId);
    let message;
    for (let i = 0; i < stub.messages.length; i++) {
      if (stub.messages[i].id === messageId) {
        message = stub.messages[i];
      }
    }
    res.status(200).send(message);
  })
  .put((req, res) => {
    const updatedMessageObj = req.body;
    updatedMessageObj.id = Number(req.params.messageId);
    res.status(201).send(updatedMessageObj);
  });

module.exports = router;
