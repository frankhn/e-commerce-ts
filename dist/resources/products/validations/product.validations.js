"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
exports.default = celebrate_1.Joi.object().keys({
    review: celebrate_1.Joi.string().lowercase().min(3).max(100)
        .trim().required(),
    rating: celebrate_1.Joi.number().integer().min(1).max(5)
        .required()
});
//# sourceMappingURL=product.validations.js.map