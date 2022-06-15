const validate = require("../schemas/feedback.schema");
const joiErrorHandler = require("../utils/joi-errors-handler");
// Ask service
const FeedbackService = require("../services/feedback.service");
const create = async (req, res, next) => {
  const { feedback_data } = req.body;
  // Payload controller
  const { error } = validate(feedback_data);
  if (error) {
    res.status(400).json({
      errors: joiErrorHandler(error.details),
    });
    return;
  }
  // Is Valid
  const service = new FeedbackService(feedback_data);
  const isSend = await service.sendMail();
  if (isSend.messageId) {
    res.status(201).json({
      message: "Mail gönderildi",
    });
  }
};

module.exports = {
  create,
};
