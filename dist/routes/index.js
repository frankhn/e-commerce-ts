"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var tax_routes_1 = __importDefault(require("../resources/tax/tax.routes"));
var cart_routes_1 = __importDefault(require("../resources/cart/cart.routes"));
var products_routes_1 = __importDefault(require("../resources/products/products.routes"));
var category_routes_1 = __importDefault(require("../resources/category/category.routes"));
var user_routes_1 = __importDefault(require("../resources/users/user.routes"));
var payment_routes_1 = __importDefault(require("../resources/stripe/payment.routes"));
var attributes_routes_1 = __importDefault(require("../resources/attributes/attributes.routes"));
/** *************************************** */
var app = express_1.default();
/** *************************************** */
/**
 * user account
 */
app.use('/taxes', tax_routes_1.default);
/** shopping cart */
app.use('/shoppingCart', cart_routes_1.default);
/**
 * products
 */
app.use('/products', products_routes_1.default);
/**
 * categories
 */
app.use('/categories', category_routes_1.default);
/**
 * search
 */
// app.use('/search', search);
/**
 * user
 */
app.use('/customers', user_routes_1.default);
/**
 * user
 */
app.use('/stripe', payment_routes_1.default);
/**
 * user
 */
app.use('/attributes', attributes_routes_1.default);
/** **************************************** */
exports.default = app;
//# sourceMappingURL=index.js.map