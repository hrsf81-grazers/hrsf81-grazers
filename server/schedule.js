const express = require('express');
const stub = require('./stubData.js');

const router = express.Router();

router.use((req, res, next) => {
  next();
});

router.get('/:scheduleId', (req, res) => {
  const scheduleId = Number(req.params.scheduleId);
  let schedule;
  for (let i = 0; i < stub.schedules.length; i += 1) {
    if (stub.schedules[i].id === scheduleId) {
      schedule = stub.schedules[i];
      break;
    }
  }
  res.status(200).send(schedule);
});

module.exports = router;
