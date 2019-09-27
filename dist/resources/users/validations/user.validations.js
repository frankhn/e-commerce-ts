"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
exports.userSignupSchema = celebrate_1.Joi.object().keys({
    name: celebrate_1.Joi.string().lowercase().min(3).max(20)
        .trim()
        .required(),
    email: celebrate_1.Joi.string().email().trim()
        .required(),
    password: celebrate_1.Joi.string().trim().required()
});
exports.userLogin = celebrate_1.Joi.object().keys({
    email: celebrate_1.Joi.string().email().trim().required(),
    password: celebrate_1.Joi.string().trim().required()
});
exports.userAddress = celebrate_1.Joi.object().keys({
    address_1: celebrate_1.Joi.string().lowercase().min(3).max(20)
        .trim()
        .required(),
    address_2: celebrate_1.Joi.string().lowercase().min(3).max(20)
        .trim(),
    city: celebrate_1.Joi.string().trim().min(2).max(20)
        .required(),
    country: celebrate_1.Joi.string().max(20).min(3).trim()
        .required(),
    shipping_region_id: celebrate_1.Joi.number().integer(),
    postal_code: celebrate_1.Joi.string().alphanum().min(3).max(5),
    day_phone: celebrate_1.Joi.number().example('0781666092'),
    mob_phone: celebrate_1.Joi.number().example('0781666092').required(),
    eve_phone: celebrate_1.Joi.number().example('0781666092')
});
exports.creditCard = celebrate_1.Joi.object().keys({
    credit_card: celebrate_1.Joi.number().required()
});
//# sourceMappingURL=user.validations.js.map