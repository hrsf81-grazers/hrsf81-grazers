const addUser = function(role, firstname, lastname, email, phoneNumber) {
  pool.query('INSERT INTO users(role, firstname, lastname, email, phoneNumber) values($1, $2, $3, $4, $5)',
    [role, firstname, lastname, email, phoneNumber]);
};

module.exports = {
  addUser
};
