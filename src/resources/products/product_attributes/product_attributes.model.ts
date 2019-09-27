import * as Sequelize from 'sequelize';
import { SequelizeAttributes }  from '../../../types'
import { Product_attributes_Attributes } from './_interface_/product_attributes';

// instance
export type ProductAttributesInstance = Sequelize.Instance<Product_attributes_Attributes> & Product_attributes_Attributes

export const ProductAttributesInit = (sequelize: Sequelize.Sequelize, Sequelize: Sequelize.DataTypes) => {
  const ProductAttributes: SequelizeAttributes<Product_attributes_Attributes> = {
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
     color: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      allowNull: true,
    },
     other: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      allowNull: true,
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
  return sequelize.define<ProductAttributesInstance, Product_attributes_Attributes>('product_attributes', ProductAttributes, {
    tableName: 'product_attributes'
  })
};