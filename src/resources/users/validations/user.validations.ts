import { Joi } from 'celebrate'

export const signup = Joi.object().keys({
  firstname: Joi.string().trim().lowercase().min(2).max(30).required(),
  lastname: Joi.string().trim().lowercase().min(2).max(30).required(),
  username: Joi.string().trim().lowercase().alphanum().min(4).max(12).required(),
  email: Joi.string().email().trim().required(),
  birth_day: Joi.date(),
  password: Joi.string().trim(),
  avatar: Joi.string().trim(),
  city: Joi.string().alphanum().trim().required(),
  country: Joi.string().alphanum().trim().required()
})
