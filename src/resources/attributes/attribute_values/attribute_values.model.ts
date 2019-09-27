import * as Sequelize from 'sequelize';
import { SequelizeAttributes } from '../../../types'
import { AttributesValuesAttributes } from './__interface__/attributes_values';


// instance
export type AttributesValuesInstance = Sequelize.Instance<AttributesValuesAttributes> & AttributesValuesAttributes

export const Attributes_valuesInit = (sequelize: Sequelize.Sequelize, Sequelize: Sequelize.DataTypes) => {
  const attribute_values: SequelizeAttributes<AttributesValuesAttributes> = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    attribute_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
     value: {
      type: Sequelize.TEXT,
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
  return sequelize.define<AttributesValuesInstance, AttributesValuesAttributes>('attributes_values', attribute_values, {
    tableName: 'attribute_values'
  })
};