import * as Sequelize from 'sequelize';
import { ReviewAttributes } from './_interface_/review';
import { SequelizeAttributes } from '../../../types';

export type ReviewInstance = Sequelize.Instance<ReviewAttributes> & ReviewAttributes

export const ReviewInit = (sequelize: Sequelize.Sequelize, Sequelize: Sequelize.DataTypes) => {
  const Review: SequelizeAttributes<ReviewAttributes> = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    customer_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    product_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    review: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    rating: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  }
  return sequelize.define<ReviewInstance, ReviewAttributes>('products', Review, {
    tableName: 'reviews'
  })
}