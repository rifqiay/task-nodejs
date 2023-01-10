const express = require("express");
const router = express.Router();
const { save, showAll, Edit, erase } = require("../controller/category");
const protect = require("../middleware/protect");
const { check } = require("express-validator");
const validator = require("../middleware/validator");

router
  .post(
    "/save",
    [check("name", "name is required").not().isEmpty()],
    validator,
    protect,
    save
  )
  .get("/", protect, showAll)
  .put("/update/:id", protect, Edit)
  .delete("/delete/:id", protect, erase);

module.exports = router;
