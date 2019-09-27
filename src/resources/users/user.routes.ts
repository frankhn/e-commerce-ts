import express from 'express';
import { celebrate } from 'celebrate'
import User from './user.controller';
import verifyToken from '../../middlewares/validators/token.validator';
import { userSignupSchema, userLogin, userAddress, creditCard } from './validations/user.validations';

const user = new User();

/** ******************************************* */

const user_router = express.Router();

/** ******************************************* */


// update customer
// router.put('/', (req, res, next) => {
//   new TokenValidator(req, res, next).verify();
// }, customer.updateAddress);


// get customer by token
user_router.get('/profile', (req, res, next) => {
  new verifyToken(req, res, next).verify();
}, user.profile);


// signup customer
user_router.post('/register', celebrate({ body: userSignupSchema }), user.register);


// login customer
user_router.post('/login', celebrate({ body: userLogin }), user.login);


// update customer address
// user_router.put('/address', (req, res, next) => {
//   new verifyToken(req, res, next).verify();
// }, celebrate({ body: userAddress }), user.updateAddress);


// update customer credit card
// user_router.put('/creditCard', (req, res, next) => {
//   new verifyToken(req, res, next).verify();
// }, celebrate({ body: creditCard }), user.updateCreditCard);

export default user_router;