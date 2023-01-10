const db = require("../config/db");

const create = (data) => {
  const { id, name, price, categoryid } = data;
  return db.query(
    `INSERT INTO product(id,name,price,categoryid) VALUES('${id}','${name}',${price},'${categoryid}')`
  );
};

const getAll = () => {
  return db.query(`SELECT * FROM product`);
};

const update = (data) => {
  const { id, name, price, categoryid } = data;
  return db.query(
    `UPDATE product SET name='${name}', price= ${price}, categoryid='${categoryid}' WHERE id='${id}'`
  );
};

const remove = (id) => {
  return db.query(`DELETE FROM product WHERE id='${id}'`);
};

module.exports = {
  create,
  getAll,
  update,
  remove,
};
