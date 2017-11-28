const Joi = require('joi');

const userSchema = Joi.object().keys({
  username: Joi.string().required(),
  password: Joi.string().min(6)
})

export const validateUser = (body) => {
  const result = Joi.validate({ username: body.username, password: body.password }, userSchema);
  return result.error
}