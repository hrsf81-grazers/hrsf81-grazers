const { Pool } = require('pg');
const config = require('./config.js');

const pool = new Pool(config);


pool.query('CREATE TABLE IF NOT EXISTS users (id SERIAL UNIQUE NOT NULL PRIMARY KEY, role VARCHAR(80), firstName VARCHAR(80), lastName VARCHAR(80), email VARCHAR(80), phoneNumber VARCHAR(80))')
.then(() =>

  pool.query('CREATE TABLE IF NOT EXISTS events (id SERIAL UNIQUE NOT NULL PRIMARY KEY, name VARCHAR(80), location VARCHAR(80), organizer_id SERIAL REFERENCES users(id))'))
.then(() =>

  pool.query('CREATE TABLE IF NOT EXISTS groups (id SERIAL UNIQUE NOT NULL PRIMARY KEY, name VARCHAR(80), type VARCHAR(80), event_id SERIAL REFERENCES events(id))'))
.then(() =>

  pool.query('CREATE TABLE IF NOT EXISTS group_user (group_id SERIAL NOT NULL REFERENCES groups(id), user_id SERIAL NOT NULL REFERENCES users(id), PRIMARY KEY (group_id, user_id))'))
.then(() =>

  pool.query('CREATE TABLE IF NOT EXISTS messages (id SERIAL UNIQUE NOT NULL PRIMARY KEY, from_user_id SERIAL REFERENCES users(id), to_group_id SERIAL REFERENCES groups(id), title VARCHAR(80) NOT NULL, text VARCHAR(140), event_id SERIAL REFERENCES events(id))'));



