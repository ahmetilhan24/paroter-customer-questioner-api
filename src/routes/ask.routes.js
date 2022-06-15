const askRoutes = require("express").Router();
const { create } = require("../controllers/ask.controller");
askRoutes.post("/", create);

module.exports = askRoutes;
