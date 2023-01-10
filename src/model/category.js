const db = require("../config/db");

const create = (data) => {
  const { id, name } = data;
  return db.query(`INSERT INTO category(id, name) VALUES('${id}', '${name}')`);
};

const getAll = () => {
  return db.query(`SELECT * FROM category`);
};

const update = (data) => {
  const { id, name } = data;
  return db.query(`UPDATE category SET name='${name}' WHERE id='${id}'`);
};

const remove = (id) => {
  return db.query(`DELETE FROM category WHERE id='${id}'`);
};

module.exports = {
  create,
  getAll,
  update,
  remove,
};
