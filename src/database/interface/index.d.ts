import * as Sequelize from 'sequelize';
import { UserInstance } from '../../resources/users/user.model';
import { UserAttributes } from '../../resources/users/_interface_/user';
import { TaxInstance } from '../../resources/tax/tax.model';
import { TaxAttributes } from '../../resources/tax/__interface__/tax';
import { CartInstance } from '../../resources/cart/cart.model';
import { CartAttributes } from '../../resources/cart/__interface__/cart';
import { ProductInstance } from '../../resources/products/product.model';
import { ProductAttributes } from '../../resources/products/_interface_/product';
import { CategoryInstance } from '../../resources/category/category.model';
import { CategoryAttributes } from '../../resources/category/_interface_/category';
import { ProductCategoryInstance } from '../../resources/product_category/product_category.model';
import { ProductCategoryAttributes } from '../../resources/product_category/_interface_/category';
import { ReviewInstance } from '../../resources/products/review/review.model';
import { ReviewAttributes } from '../../resources/products/review/_interface_/review';

export interface DBInterface {
    sequelize: Sequelize.Sequelize;
    Sequelize: Sequelize.SequelizeStatic;
    User: Sequelize.Model<UserInstance, UserAttributes>;
    Tax: Sequelize.Model<TaxInstance, TaxAttributes>;
    Cart: Sequelize.Model<CartInstance, CartAttributes>
    Product: Sequelize.Model<ProductInstance, ProductAttributes>
    Category: Sequelize.Model<CategoryInstance, CategoryAttributes>
    ProductCategory: Sequelize.Model<ProductCategoryInstance, ProductCategoryAttributes>
    Review: Sequelize.Model<ReviewInstance, ReviewAttributes>
}