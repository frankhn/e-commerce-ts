import Sequelize from 'sequelize';
import dotenv from 'dotenv'
import { DBInterface } from '../interface/index';
import { UserInit } from '../../resources/users/user.model';
import { TaxInit } from '../../resources/tax/tax.model';
import { CartInit } from '../../resources/cart/cart.model';
import { ProductInit } from '../../resources/products/product.model';
import { CategoryInit } from '../../resources/category/category.model';
import { ProductCategoryInit } from '../../resources/product_category/product_category.model';
import { ReviewInit } from '../../resources/products/review/review.model';
import { AttributesInit } from '../../resources/attributes/attributes.model';
import { Attributes_valuesInit } from '../../resources/attributes/attribute_values/attribute_values.model';

dotenv.config()

const env =  process.env.NODE_ENV || "development"
const configDb = require('../config')[env]
const url = configDb.url || process.env.DATABASE_CONNECTION_URL;

const sequelize = new Sequelize(url as string, configDb);

const db: DBInterface = {
  sequelize,
  Sequelize: Sequelize.Sequelize,
  User: UserInit(sequelize, Sequelize),
  Tax: TaxInit(sequelize, Sequelize),
  Cart: CartInit(sequelize, Sequelize),
  Product: ProductInit(sequelize, Sequelize),
  Category: CategoryInit(sequelize, Sequelize),
  ProductCategory: ProductCategoryInit(sequelize, Sequelize),
  Review: ReviewInit(sequelize, Sequelize),
  Attributes: AttributesInit(sequelize, Sequelize),
  Attributes_values: Attributes_valuesInit(sequelize, Sequelize)
}

Object.keys(db).forEach((ModelName) => {
  if (db[ModelName].associate) {
    db[ModelName].associate(db)
  }
});

export default db;