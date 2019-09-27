import { Joi } from 'celebrate';

export const userSignupSchema = Joi.object().keys({
  name: Joi.string().lowercase().min(3).max(20)
    .trim()
    .required(),
  email: Joi.string().email().trim()
    .required(),
  password: Joi.string().trim().required()
});

export const userLogin = Joi.object().keys({
  email: Joi.string().email().trim().required(),
  password: Joi.string().trim().required()
});

export const userAddress = Joi.object().keys({
  address_1: Joi.string().lowercase().min(3).max(20)
    .trim()
    .required(),
  address_2: Joi.string().lowercase().min(3).max(20)
    .trim(),
  city: Joi.string().trim().min(2).max(20)
    .required(),
  country: Joi.string().max(20).min(3).trim()
    .required(),
  shipping_region_id: Joi.number().integer(),
  postal_code: Joi.string().alphanum().min(3).max(5),
  day_phone: Joi.number().example('0781666092'),
  mob_phone: Joi.number().example('0781666092').required(),
  eve_phone: Joi.number().example('0781666092')
});

export const creditCard = Joi.object().keys({
  credit_card: Joi.number().required()
});
