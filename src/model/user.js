const db = require("../config/db");

const create = (data) => {
  const { id, username, passwordHash } = data;
  return db.query(
    `INSERT INTO users(id, username, password) VALUES('${id}', '${username}', '${passwordHash}')`
  );
};

const findUsername = (username) => {
  return new Promise((resolve, reject) => {
    db.query(
      `SELECT * FROM users WHERE username='${username}'`,
      (error, result) => {
        if (!error) {
          resolve(result);
        } else {
          reject(error);
        }
      }
    );
  });
};

module.exports = {
  create,
  findUsername,
};
