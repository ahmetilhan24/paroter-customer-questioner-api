const express = require("express");
const app = express();
// Configs
const { port } = require("./configs/env.config");
// Routes
const routes = require("./routes");
app.use("/", routes);
// Start server
app.listen(port, () => console.log(`${port} portunu dinliyorum!`));
