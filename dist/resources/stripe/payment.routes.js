"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var payment_controller_1 = __importDefault(require("./payment.controller"));
var celebrate_1 = require("celebrate");
var payment_validation_1 = __importDefault(require("./validations/payment.validation"));
var payment_router = express_1.default.Router();
// create car instance
var payment = new payment_controller_1.default();
payment_router
    .route('/charge')
    .post(celebrate_1.celebrate({ body: payment_validation_1.default }), payment.charge);
payment_router.post('/webHooks', payment.charge);
exports.default = payment_router;
//# sourceMappingURL=payment.routes.js.map