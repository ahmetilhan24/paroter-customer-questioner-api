const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
// Express bod json configured
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(cors());
// Configs
const { port } = require("./configs/env.config");
// Routes
const routes = require("./routes");
app.use("/", routes);
// Start server
app.listen(port, () => console.log(`${port} portunu dinliyorum!`));
