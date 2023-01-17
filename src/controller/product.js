const { create, getAll, update, remove } = require("../model/product");
const commonHelper = require("../helper/common");
const { v4: uuidV4 } = require("uuid");
const createError = require("http-errors");

const productsControlers = {
  save: (req, res, next) => {
    const { name, price, categoryid } = req.body;
    const data = {
      id: uuidV4(),
      name,
      price,
      categoryid,
    };
    create(data)
      .then((result) => {
        commonHelper.response(res, null, 200, "Create Success", true);
      })
      .catch((error) => next(new createError(error)));
  },
  showAll: (req, res, next) => {
    getAll()
      .then((result) => {
        commonHelper.response(
          res,
          result.rows,
          200,
          "Get All Data Success",
          true
        );
      })
      .catch((error) => next(new createError(error)));
  },
  Edit: (req, res, next) => {
    const { name, price, categoryid } = req.body;
    const id = req.params.id;
    const data = {
      id,
      name,
      price,
      categoryid,
    };
    update(data)
      .then((result) => {
        commonHelper.response(res, null, 200, "Edit Success", true);
      })
      .catch((error) => next(new createError(error)));
  },
  erase: (req, res, next) => {
    const id = req.params.id;
    remove(id)
      .then((result) => {
        commonHelper.response(res, null, 200, "Delete Success", true);
      })
      .catch((error) => next(new createError(error)));
  },
};

module.exports = productsControlers;
