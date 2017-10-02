const express = require('express');
const app = express();
const port = process.env.PORT || '3000';
const bodyParser = require('body-parser');
const stub = require('./stubData.js');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));


app.listen(port, () => {
  console.log(`Event HUD server running on port ${port}`);
});
