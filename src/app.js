const express = require("express");
const app = express();
// Env config
require("dotenv").config();
// Routes
const routes = require("./routes");
app.use("/", routes);
// Start server
app.listen(process.env.PORT || 3000, () =>
  console.log(`${process.env.PORT}'unu dinliyorum!`)
);
