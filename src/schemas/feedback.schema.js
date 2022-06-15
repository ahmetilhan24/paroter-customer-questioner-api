const Joi = require("joi");

const schema = Joi.object().options({ abortEarly: false }).keys({
  rate: Joi.number().required(),
});

const validate = (payload) => schema.validate(payload);

module.exports = validate;
