"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
exports.default = celebrate_1.Joi.object().keys({
    email: celebrate_1.Joi.string().email().trim().required(),
    amount: celebrate_1.Joi.number().integer().greater(0).required(),
    order_id: celebrate_1.Joi.number().integer().greater(0).required(),
    description: celebrate_1.Joi.string().trim().required().max(100).min(10),
    currency: celebrate_1.Joi.string().trim().min(2).max(5).optional()
});
//# sourceMappingURL=payment.validation.js.map