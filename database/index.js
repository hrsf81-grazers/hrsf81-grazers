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

const addUserToGroup = (groupId, userId) =>
  pool.query(
    'INSERT INTO group_user(group_id, user_id) values($1, $2)',
    [groupId, userId]
  );

const addMessage = (message) => {
  const messageInserts = message.toIds.map(recipientId =>
    pool.query(
      'INSERT INTO messages(from_user_id, to_group_id, title, text, event_id, date_time) values($1, $2, $3, $4, $5, $6)',
      [message.fromId, recipientId, message.title, message.text, message.eventId, message.timestamp]
    ));

  return Promise.all(messageInserts);
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
