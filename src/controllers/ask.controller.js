const validate = require("../schemas/ask.schema");
const joiErrorHandler = require("../utils/joi-errors-handler");
const create = (req, res, next) => {
  const { mail_data } = req.body;
  // Payload controller
  const { error } = validate(mail_data);
  if (error) {
    res.status(400).json({
      errors: joiErrorHandler(error.details),
    });
    return;
  }
};

module.exports = {
  create,
};
