const validate = require("../schemas/ask.schema");
const joiErrorHandler = require("../utils/joi-errors-handler");
// Ask service
const AskService = require("../services/ask.service");
const create = (req, res, next) => {
  const { ask_data } = req.body;
  // Payload controller
  const { error } = validate(ask_data);
  if (error) {
    res.status(400).json({
      errors: joiErrorHandler(error.details),
    });
    return;
  }
  // Is Valid
  const service = new AskService(ask_data);
  service.sendMail();
};

module.exports = {
  create,
};
