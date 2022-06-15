const Joi = require("joi");

const schema = Joi.object()
  .options({ abortEarly: false })
  .keys({
    full_name: Joi.string().max(100).min(3).required(),
    email: Joi.string().email().required(),
    message: Joi.string().max(200).min(20).required(),
  });

const validate = async (payload) => schema.validate(payload);

module.exports = validate;
