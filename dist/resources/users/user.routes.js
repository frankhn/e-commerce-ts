"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var celebrate_1 = require("celebrate");
var user_controller_1 = __importDefault(require("./user.controller"));
var token_validator_1 = __importDefault(require("../../middlewares/validators/token.validator"));
var user_validations_1 = require("./validations/user.validations");
var user = new user_controller_1.default();
/** ******************************************* */
var user_router = express_1.default.Router();
/** ******************************************* */
// update customer
// router.put('/', (req, res, next) => {
//   new TokenValidator(req, res, next).verify();
// }, customer.updateAddress);
// get customer by token
user_router.get('/profile', function (req, res, next) {
    new token_validator_1.default(req, res, next).verify();
}, user.profile);
// signup customer
user_router.post('/register', celebrate_1.celebrate({ body: user_validations_1.userSignupSchema }), user.register);
// login customer
user_router.post('/login', celebrate_1.celebrate({ body: user_validations_1.userLogin }), user.login);
// update customer address
// user_router.put('/address', (req, res, next) => {
//   new verifyToken(req, res, next).verify();
// }, celebrate({ body: userAddress }), user.updateAddress);
// update customer credit card
// user_router.put('/creditCard', (req, res, next) => {
//   new verifyToken(req, res, next).verify();
// }, celebrate({ body: creditCard }), user.updateCreditCard);
exports.default = user_router;
//# sourceMappingURL=user.routes.js.map