const { validationResult } = require("express-validator");
const commonHelper = require("../helper/common");

const validator = (req, res, next) => {
  const errors = validationResult(req).array();
  if (errors) {
    for (const error of errors) {
      commonHelper.response(res, null, 422, error.msg, false);
    }
  }
  next();
};

module.exports = validator;
