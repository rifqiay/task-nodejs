const bcrypt = require("bcryptjs");
const { v4: uuidV4 } = require("uuid");
const { create, findUsername } = require("../model/user");
const commonHelper = require("../helper/common");
const { generateToken, generateRefershToken } = require("../helper/jwt");
const jwt = require("jsonwebtoken");
const createError = require("http-errors");

const userControler = {
  register: (req, res) => {
    const { username, password } = req.body;
    const passwordHash = bcrypt.hashSync(password);
    const data = {
      id: uuidV4(),
      username,
      passwordHash,
    };
    create(data)
      .then((result) => {
        commonHelper.response(res, result.rows, 200, "Register success");
      })
      .catch((error) => next(new createError(error)));
  },
  login: async (req, res, next) => {
    try {
      const { username, password } = req.body;
      const {
        rows: [user],
      } = await findUsername(username);
      if (!user) throw next(new createError(403, "username is invalid"));
      const isPassword = bcrypt.compareSync(password, user.password);
      if (!isPassword) throw next(new createError(403, "Password is invalid"));
      delete user.password;
      const payload = {
        id: user.id,
      };
      user.token = generateToken(payload);
      user.refreshToken = generateRefershToken(payload);

      commonHelper.response(res, user, 200, "Login Success");
    } catch (error) {
      next(new createError[500]());
    }
  },
  refreshToken: (req, res) => {
    const refreshToken = req.body.refreshToken;
    const decoded = jwt.verify(refreshToken, process.env.SECRETE_KEY_JWT);
    const payload = {
      id: decoded.id,
    };
    const result = {
      token: generateToken(payload),
    };
    res.send(result);
  },
};

module.exports = userControler;
