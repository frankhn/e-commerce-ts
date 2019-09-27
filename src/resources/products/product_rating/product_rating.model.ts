import * as Sequelize from 'sequelize';
import { ProductRatingAttributes } from './_interface_/product_rating';
import { SequelizeAttributes } from '../../../types';

export type ProductRatingInstance = Sequelize.Instance<ProductRatingAttributes> & ProductRatingAttributes

export const ProductRatingInit = (sequelize: Sequelize.Sequelize, Sequelize: Sequelize.DataTypes) => {
  const ProductRating: SequelizeAttributes<ProductRatingAttributes> = {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    product_id: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    user_id: {
      type: Sequelize.STRING,
      allowNull: false
    },
    rate: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        args: [1, 5],
        msg: 'invalid rating, must be between 1 and 5'
      }
    },
    review: {
      type: Sequelize.STRING,
      allowNull: true,
      validate: {
        args: [10, 50],
        msg: 'Too many characters'
      }
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false
    },
    Updated: {
      type: Sequelize.DATE,
      allowNull: false
    }
  }
  return sequelize.define<ProductRatingInstance, ProductRatingAttributes>('product_rating', ProductRating, {
    tableName: 'product_rating'
  })
}