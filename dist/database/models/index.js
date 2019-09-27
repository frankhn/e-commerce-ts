"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = __importDefault(require("sequelize"));
var dotenv_1 = __importDefault(require("dotenv"));
var user_model_1 = require("../../resources/users/user.model");
var tax_model_1 = require("../../resources/tax/tax.model");
var cart_model_1 = require("../../resources/cart/cart.model");
var product_model_1 = require("../../resources/products/product.model");
var category_model_1 = require("../../resources/category/category.model");
var product_category_model_1 = require("../../resources/product_category/product_category.model");
var review_model_1 = require("../../resources/products/review/review.model");
var attributes_model_1 = require("../../resources/attributes/attributes.model");
var attribute_values_model_1 = require("../../resources/attributes/attribute_values/attribute_values.model");
dotenv_1.default.config();
var env = process.env.NODE_ENV || "development";
var configDb = require('../config')[env];
var url = configDb.url || process.env.DATABASE_CONNECTION_URL;
var sequelize = new sequelize_1.default(url, configDb);
var db = {
    sequelize: sequelize,
    Sequelize: sequelize_1.default.Sequelize,
    User: user_model_1.UserInit(sequelize, sequelize_1.default),
    Tax: tax_model_1.TaxInit(sequelize, sequelize_1.default),
    Cart: cart_model_1.CartInit(sequelize, sequelize_1.default),
    Product: product_model_1.ProductInit(sequelize, sequelize_1.default),
    Category: category_model_1.CategoryInit(sequelize, sequelize_1.default),
    ProductCategory: product_category_model_1.ProductCategoryInit(sequelize, sequelize_1.default),
    Review: review_model_1.ReviewInit(sequelize, sequelize_1.default),
    Attributes: attributes_model_1.AttributesInit(sequelize, sequelize_1.default),
    Attributes_values: attribute_values_model_1.Attributes_valuesInit(sequelize, sequelize_1.default)
};
Object.keys(db).forEach(function (ModelName) {
    if (db[ModelName].associate) {
        db[ModelName].associate(db);
    }
});
exports.default = db;
//# sourceMappingURL=index.js.map