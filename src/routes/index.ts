 import express from 'express';
import tax_router from '../resources/tax/tax.routes';

/** *************************************** */

const app = express();

/** *************************************** */

/**
 * user account
 */
app.use('/taxes', tax_router);

/** Country */
// app.use('/country');

/**
 * admin
 */
// app.use('/super', admin);

/**
 * sellers
 */
// app.use('/seller', sellers);

/**
 * search
 */
// app.use('/search', search);

/**
 * products
 */
// app.use('/products', product);

/** **************************************** */

export default app;
