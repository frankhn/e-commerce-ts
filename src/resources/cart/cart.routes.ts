import express from 'express';
import { celebrate } from 'celebrate'
import Cart from './cart.controller';
import * as validations from './validations/cart.validations'

const cart = new Cart();

/** ******************************************* */

const cart_router = express.Router();

/** ******************************************* */

// generate a unique cart id
// cart_router
// .route('/generateUniqueId')
// .get(cart.generateUniqueCartId);

// add product to cart
cart_router
.route('/add')
.post(celebrate({ body: validations.addToCart }), cart.createOne);

// get list of products in a cart
// cart_router
// .route('/:cartId(\\d+)')
// .get(cart.listOfProductsInCart);

// // update cart by item
// cart_router
// .route('/update/:cartId(\\d+)')
// .put(celebrate({ body: validations.updateCart }), cart.updateCartByItem);

// // empty the cart
// cart_router
// .route('/empty/:cartId(\\d+)')
// .delete(cart.emptyCart);

// // moveToCart
// // router.get('moveToCart/:itemID(\\d+)', (req, res, next) => {
// //   new TokenValidator(req, res, next).verify();
// // }, cart.MoveAProductToCart);

// // total amount in cart
// cart_router
// .route('/totalAmount/:cartId(\\d+)')
// .get(cart.TotalAmountFromCart);

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


export default cart_router;