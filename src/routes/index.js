const routes = require("express").Router();
// Import routes
const askRouter = require("./ask.routes");

routes.get("/", (req, res, next) => {
  res.status(200).json({
    message: "ındex route istek geldi",
  });
});

// Router
routes.route("/ask", askRouter);

module.exports = routes;
