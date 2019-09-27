import * as Sequelize from 'sequelize';
import { SequelizeAttributes }  from '../../../types'
import { ProductDiscountAttributes } from './_interface_/product_discount';

// instance
export type ProductDiscountInstance = Sequelize.Instance<ProductDiscountAttributes> & ProductDiscountAttributes

export const ProductCategoryInit = (sequelize: Sequelize.Sequelize, Sequelize: Sequelize.DataTypes) => {
  const ProductDiscount: SequelizeAttributes<ProductDiscountAttributes> = {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    product_id: {
      type: Sequelize.UUIDV4,
      allowNull: false,
      unique: true
    },
    amount: {
      type: Sequelize.REAL,
      allowNull: false
    },
    from: {
      type: Sequelize.STRING,
      allowNull: false
    },
    to: {
      type: Sequelize.STRING,
      allowNull: false
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
  return sequelize.define<ProductDiscountInstance, ProductDiscountAttributes>('product_discount', ProductDiscount, {
    tableName: 'product_discount'
  })
};