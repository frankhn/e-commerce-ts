import * as Sequelize from 'sequelize';
import { ProductAttributes } from './_interface_/product';
import { SequelizeAttributes } from '../../types';

export type ProductInstance = Sequelize.Instance<ProductAttributes> & ProductAttributes

export const ProductInit = (sequelize: Sequelize.Sequelize, Sequelize: Sequelize.DataTypes) => {
  const Product: SequelizeAttributes<ProductAttributes> = {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    category: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    price: {
      type: Sequelize.REAL,
      allowNull: true
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false
    },
    discount: {
      type: Sequelize.REAL,
      allowNull: true
    },
    city: {
      type: Sequelize.ARRAY(Sequelize.UUID),
      allowNull: true
    },
    country: {
      type: Sequelize.ARRAY(Sequelize.UUID),
      allowNull: true
    },
    gallery: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      allowNull: false
    },
    brand: {
      type: Sequelize.UUID,
      allowNull: false
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false
    }
  }
  return sequelize.define<ProductInstance, ProductAttributes>('products', Product, {
    tableName: 'products'
  })
}