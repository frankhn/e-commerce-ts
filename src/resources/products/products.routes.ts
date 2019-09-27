import express from 'express';
import { celebrate } from 'celebrate';
import reviewValidations from './validations/product.validations';
import verifyToken from '../../middlewares/validators/token.validator';
import Product from './product.controller';
import Review from './review/review.controller';

const product_router = express.Router();

// create car instance
const product = new Product();
const review = new Review();

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
product_router.post('/:id(\\d+)/reviews', (req, res, next) => {
  new verifyToken(req, res, next).verify();
}, celebrate({ body: reviewValidations }), review.createReview);


export default product_router;
