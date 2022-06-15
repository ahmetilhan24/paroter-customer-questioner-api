const feedbackRoutes = require("express").Router();
const { create } = require("../controllers/feedback.controller");
feedbackRoutes.post("/", create);

module.exports = feedbackRoutes;
