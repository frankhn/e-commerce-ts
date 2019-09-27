import * as Sequelize from 'sequelize';
import { ProductCategoryAttributes } from './_interface_/category';
import { SequelizeAttributes } from '../../types';

export type ProductCategoryInstance = Sequelize.Instance<ProductCategoryAttributes> & ProductCategoryAttributes

export const ProductCategoryInit = (sequelize: Sequelize.Sequelize, Sequelize: Sequelize.DataTypes) => {
  const ProductCategory: SequelizeAttributes<ProductCategoryAttributes> = {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    product_id: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    category_id: {
      type: Sequelize.TEXT,
      allowNull: false
    }
  }
  return sequelize.define<ProductCategoryInstance, ProductCategoryAttributes>('product_categories', ProductCategory, {
    tableName: 'product_categories'
  })
}