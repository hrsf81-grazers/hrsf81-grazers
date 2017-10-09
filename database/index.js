const { Pool } = require('pg');
const config = require('./config');

const pool = new Pool(config);

const addUser = user =>
  pool.query(
    'INSERT INTO users(role, firstname, lastname, email, phonenumber) values($1, $2, $3, $4, $5)',
    [user.role, user.firstName, user.lastName, user.email, user.phone]
  );

const addEvent = event =>
  pool.query(
    'INSERT INTO events(name, location, organizer_id, schedule_id) values($1, $2, $3, $4)',
    [event.name, event.location, event.organizerId, event.scheduleId]
  );

const addGroup = group =>
  pool.query(
    'INSERT INTO groups(name, type, event_id, schedule_id) values($1, $2, $3, $4)',
    [group.name, group.type, group.eventId, group.scheduleId]
  );

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

const getAllUsers = () =>
  pool.query('SELECT * FROM users');

const getAllEvents = () =>
  pool.query('SELECT * FROM events');

const getAllGroups = () =>
  pool.query('SELECT * FROM groups');

const getAllMessages = () =>
  pool.query('SELECT * FROM messages');

module.exports = {
  addUser,
  addEvent,
  addGroup,
  addUserToGroup,
  addMessage,
  getAllUsers,
  getAllEvents,
  getAllGroups,
  getAllMessages
};
