"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var celebrate_1 = require("celebrate");
var product_validations_1 = __importDefault(require("./validations/product.validations"));
var token_validator_1 = __importDefault(require("../../middlewares/validators/token.validator"));
var product_controller_1 = __importDefault(require("./product.controller"));
var review_controller_1 = __importDefault(require("./review/review.controller"));
var product_router = express_1.default.Router();
// create car instance
var product = new product_controller_1.default();
var review = new review_controller_1.default();
// get all products
product_router.get('/', product.getMany);
// search products
product_router.get('/search', product.search);
// get one product
product_router.get('/:id(\\d+)', product.readOne);
// products in a category
product_router.get('/inCategory/:categoryId(\\d+)', product.productsInACategory);
// products in a department
product_router.get('/inDepartment/:departmentId(\\d+)', product.productInADepartment);
// // product details
// // router.get('/:id/details', product.allProducts);
// // locations of a product
// // router.get('/:id/locations', product.allProducts);
// reviews of a product
product_router.get('/:id(\\d+)/reviews', review.productReview);
// create reviews
product_router.post('/:id(\\d+)/reviews', function (req, res, next) {
    new token_validator_1.default(req, res, next).verify();
}, celebrate_1.celebrate({ body: product_validations_1.default }), review.createReview);
exports.default = product_router;
//# sourceMappingURL=products.routes.js.map