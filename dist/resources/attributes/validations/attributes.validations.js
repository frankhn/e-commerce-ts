"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
exports.addToCart = celebrate_1.Joi.object().keys({
    cart_id: celebrate_1.Joi.number().integer().required(),
    product_id: celebrate_1.Joi.number().integer().required(),
    attributes: celebrate_1.Joi.string().optional(),
    quantity: celebrate_1.Joi.number().integer().min(1).max(20).required(),
    buy_now: celebrate_1.Joi.string().min(3).max(10).trim().optional()
});
exports.updateCart = celebrate_1.Joi.object().keys({
    product_id: celebrate_1.Joi.number().integer().required(),
    quantity: celebrate_1.Joi.number().integer().min(1).max(20)
});
//# sourceMappingURL=attributes.validations.js.map