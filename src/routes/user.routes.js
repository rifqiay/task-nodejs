const express = require("express");
const router = express.Router();
const { register, login, refreshToken } = require("../controller/user");
const { check } = require("express-validator");
const validator = require("../middleware/validator");

router
  .post(
    "/register",
    [
      check("username", "username is required").not().isEmpty(),
      check("password", "password is required").not().isEmpty(),
    ],
    validator,
    register
  )
  .post(
    "/login",
    [
      check("username", "username is required").not().isEmpty(),
      check("password", "password is required").not().isEmpty(),
    ],
    validator,
    login
  )
  .post("/refresh-token", refreshToken);

module.exports = router;
