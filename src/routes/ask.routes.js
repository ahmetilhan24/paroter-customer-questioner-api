const askRouter = require("express").Router();
const { create } = require("../controllers/ask.controller");
askRouter.post("/", create);

module.exports = askRouter;
