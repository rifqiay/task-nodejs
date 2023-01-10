require("dotenv").config();
const express = require("express");
const app = express();
const mainRoutes = require("./src/routes/index.routes");

app.use(express.json());
app.use("/api/v1", mainRoutes);

app.listen(3001, () => {
  console.log("running on port 3001");
});
