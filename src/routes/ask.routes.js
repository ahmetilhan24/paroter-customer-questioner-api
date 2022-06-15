const askRoute = require("express").Router();

askRoute.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Ask dizine route geldi",
  });
});

module.exports.askRouter = askRoute;
