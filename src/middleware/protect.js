const jwt = require("jsonwebtoken");
const createError = require("http-errors");

const protect = (req, res, next) => {
  try {
    let token;
    if (req.headers.authorization) {
      token = req.headers.authorization.split(" ")[1];
      jwt.verify(token, process.env.SECRETE_KEY_JWT);
      next();
    } else {
      next(new createError(401, "Server need token"));
    }
  } catch (error) {
    if (error && error.name === "JsonWebTokenError") {
      next(new createError(401, "Token invalid"));
    } else if (error && error.name === "TokenExpiredError") {
      next(new createError(401, "Token expired"));
    } else {
      next(new createError(401, "Token not active"));
    }
  }
};

module.exports = protect;
