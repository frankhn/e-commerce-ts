import * as Sequelize from 'sequelize';
import { SequelizeAttributes } from '../../types'
import { CartAttributes } from './__interface__/cart';


// instance
export type CartInstance = Sequelize.Instance<CartAttributes> & CartAttributes

export const CartInit = (sequelize: Sequelize.Sequelize, Sequelize: Sequelize.DataTypes) => {
  const cart: SequelizeAttributes<CartAttributes> = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    cart_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
    },
    product_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    quantity: {
      type: Sequelize.INTEGER,
    },
    buy_now: {
      type: Sequelize.BOOLEAN,
      defaultValue: true
    },
    added_on: {
      type: Sequelize.DATE,
      defaultValue: Date.now()
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
  const Cart = sequelize.define<CartInstance, CartAttributes>('cart', cart, {
    tableName: 'shopping_carts'
  })
  return Cart;
};