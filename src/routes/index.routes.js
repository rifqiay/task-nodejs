const express = require("express");
const router = express.Router();
const userRoutes = require("./user.routes");
const categoryRoutes = require("./category.routes");
const productsRoutes = require("./products.routes");

router
  .use("/auth", userRoutes)
  .use("/category", categoryRoutes)
  .use("/products", productsRoutes);

module.exports = router;
