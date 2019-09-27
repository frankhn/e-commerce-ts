import express from 'express';
import tax_router from '../resources/tax/tax.routes';
import cart_router from '../resources/cart/cart.routes';
import product_router from '../resources/products/products.routes';
import category_router from '../resources/category/category.routes';
import user_router from '../resources/users/user.routes';
import payment_router from '../resources/stripe/payment.routes';
import attributes_router from '../resources/attributes/attributes.routes';

/** *************************************** */

const app = express();

/** *************************************** */

/**
 * user account
 */
app.use('/taxes', tax_router);

/** shopping cart */
app.use('/shoppingCart', cart_router);

/**
 * products
 */
app.use('/products', product_router);

/**
 * categories
 */
app.use('/categories', category_router);

/**
 * search
 */
// app.use('/search', search);

/**
 * user
 */
app.use('/customers', user_router);

/**
 * user
 */
app.use('/stripe', payment_router);

/**
 * user
 */
app.use('/attributes', attributes_router);

/** **************************************** */

export default app;
