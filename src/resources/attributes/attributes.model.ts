import * as Sequelize from 'sequelize';
import { SequelizeAttributes } from '../../types'
import { AttAttributes } from './__interface__/attributes';


// instance
export type AttributesInstance = Sequelize.Instance<AttAttributes> & AttAttributes

export const AttributesInit = (sequelize: Sequelize.Sequelize, Sequelize: Sequelize.DataTypes) => {
  const attribute: SequelizeAttributes<AttAttributes> = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
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
  return sequelize.define<AttributesInstance, AttAttributes>('attributes', attribute, {
    tableName: 'attributes'
  })
};