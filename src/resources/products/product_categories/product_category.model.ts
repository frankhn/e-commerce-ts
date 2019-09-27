import * as Sequelize from 'sequelize';
import { SequelizeAttributes }  from '../../../types'
import { ProductCategoryAttributes } from './_interface_/product_category';

// instance
export type ProductCategoryInstance = Sequelize.Instance<ProductCategoryAttributes> & ProductCategoryAttributes

export const ProductCategoryInit = (sequelize: Sequelize.Sequelize, Sequelize: Sequelize.DataTypes) => {
  const ProductCategory: SequelizeAttributes<ProductCategoryAttributes> = {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: {
          args: [2, 30],
          msg: 'was that a name'
        },
      }
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: {
          args: [10, 50],
          msg: 'description must be greater 10 and less 50 characters'
        },
      }
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }
  return sequelize.define<ProductCategoryInstance, ProductCategoryAttributes>('product_category', ProductCategory, {
    tableName: 'product_category'
  })
};