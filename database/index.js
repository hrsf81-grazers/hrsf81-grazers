const { Pool } = require('pg');
const config = require('./config');

const pool = new Pool(config);

const addUser = function(user) {
  return pool.query('INSERT INTO users(role, firstname, lastname, email, phonenumber) values($1, $2, $3, $4, $5)',
    [user.role, user.firstname, user.lastname, user.email, user.phonenumber]);
};

const addEvent = function(event, organizer) {
  return pool.query('SELECT id FROM users WHERE users.firstname = $1 AND users.lastname = $2', [organizer.firstname, organizer.lastname])
  .then((organizer) =>

    pool.query('INSERT INTO events(name, location, organizer_id) values($1, $2, $3)', [event.name, event.location, organizer.rows[0].id]));
};

const addGroup = function(group, event) {
  return pool.query('SELECT id FROM events WHERE events.name = $1 AND events.location = $2', [event.name, event.location])
  .then((event) =>

    pool.query('INSERT INTO groups(name, type, event_id) values($1, $2, $3)', [group.name, group.type, event.rows[0].id]));
};

const addUserToGroup = function(user, group) {
  var groupID = pool.query('SELECT id FROM groups WHERE groups.name = $1', [group.name]);

  var userID = pool.query('SELECT id FROM users WHERE users.firstname = $1 AND users.lastname = $2', [user.firstname, user.lastname]);

  return Promise.all([groupID, userID]).then((res) =>

    pool.query('INSERT INTO group_user(group_id, user_id) values($1, $2)',
      [res[0].rows[0].id,
      res[1].rows[0].id]));
};

const addMessage = function(fromUser, toGroup, message, event) {
  var fromUserID = pool.query('SELECT id FROM users WHERE users.firstname = $1 AND users.lastname = $2', [fromUser.firstname, fromUser.lastname]);

  var toGroupID = pool.query('SELECT id FROM groups WHERE groups.name = $1', [toGroup.name]);

  var eventID = pool.query('SELECT id FROM events WHERE events.name = $1', [event.name]);

  return Promise.all([fromUserID, toGroupID, eventID]).then((res) =>

    pool.query('INSERT INTO messages(from_user_id, to_group_id, title, text, event_id) values($1, $2, $3, $4, $5)',
      [res[0].rows[0].id, res[1].rows[0].id, message.title, message.text, res[2].rows[0].id]));
};

module.exports = {
  addUser,
  addEvent,
  addGroup,
  addUserToGroup,
  addMessage
};
