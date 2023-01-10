const { create, getAll, update, remove } = require("../model/category");
const commonHelper = require("../helper/common");
const { v4: uuidV4 } = require("uuid");

const categoryController = {
  save: (req, res) => {
    const name = req.body.name;
    const data = {
      id: uuidV4(),
      name,
    };
    create(data)
      .then((result) => {
        commonHelper.response(res, null, 200, "Create Success", true);
      })
      .catch((error) => res.send(error));
  },
  showAll: (req, res) => {
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
      .catch((error) => res.send(error));
  },
  Edit: (req, res) => {
    const name = req.body.name;
    const id = req.params.id;
    const data = {
      id,
      name,
    };
    update(data)
      .then((result) => {
        commonHelper.response(res, null, 200, "Edit Success", true);
      })
      .catch((error) => res.send(error));
  },
  erase: (req, res) => {
    const id = req.params.id;
    remove(id)
      .then((result) => {
        commonHelper.response(res, null, 200, "Delete Success", true);
      })
      .catch((error) => res.send(error));
  },
};

module.exports = categoryController;
