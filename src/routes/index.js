const routes = require("express").Router();
// Import routes
const askRoutes = require("./ask.routes");

const feedbackRoutes = require("./feedback.routes");
routes.get("/", (req, res, next) => {
  res.status(200).json({
    message: "ındex route istek geldi",
  });
});

// Router
routes.use("/ask", askRoutes);
routes.use("/feedback", feedbackRoutes);
module.exports = routes;
