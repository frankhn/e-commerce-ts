"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var celebrate_1 = require("celebrate");
var cart_controller_1 = __importDefault(require("./cart.controller"));
var validations = __importStar(require("./validations/cart.validations"));
var cart = new cart_controller_1.default();
/** ******************************************* */
var cart_router = express_1.default.Router();
/** ******************************************* */
// generate a unique cart id
// cart_router
// .route('/generateUniqueId')
// .get(cart.generateUniqueCartId);
// add product to cart
cart_router
    .route('/add')
    .post(celebrate_1.celebrate({ body: validations.addToCart }), cart.createOne);
// get list of products in a cart
cart_router
    .route('/:cartId(\\d+)')
    .get(cart.listOfProductsInCart);
// // update cart by item
cart_router
    .route('/update/:cartId(\\d+)')
    .put(celebrate_1.celebrate({ body: validations.updateCart }), cart.updateCartByItem);
// // empty the cart
cart_router
    .route('/empty/:cartId(\\d+)')
    .delete(cart.emptyCart);
// Review
// router.get('moveToCart/:itemID(\\d+)', (req, res, next) => {
//   new TokenValidator(req, res, next).verify();
// }, cart.MoveAProductToCart);
// total amount in cart
cart_router
    .route('/totalAmount/:cartId(\\d+)')
    .get(cart.TotalAmountFromCart);
// // save product for later
// cart_router
// .route('saveForLater/:itemID(\\d+)')
// .get((req, res, next) => {
//   new TokenValidator(req, res, next).verify();
// }, cart.saveProductForLater);
// // get saved
// cart_router
// .route('getSaved/:cartID(\\d+)')
// .post((req, res, next) => {
//   new TokenValidator(req, res, next).verify();
// }, cart.productsSavedFoLater);
// // remove from cart
// cart_router
// .route('/removeProduct/:itemID(\\d+)')
// .post((req, res, next) => {
//   new TokenValidator(req, res, next).verify();
// }, cart.removeProductInCart);
exports.default = cart_router;
//# sourceMappingURL=cart.routes.js.map