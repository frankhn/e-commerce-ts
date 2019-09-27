import * as Sequelize from 'sequelize';
import { CategoryAttributes } from './_interface_/category';
import { SequelizeAttributes } from '../../types';

export type CategoryInstance = Sequelize.Instance<CategoryAttributes> & CategoryAttributes

export const CategoryInit = (sequelize: Sequelize.Sequelize, Sequelize: Sequelize.DataTypes) => {
  const Category: SequelizeAttributes<CategoryAttributes> = {
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
    description: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    department_id: {
      type: Sequelize.INTEGER
    }
  }
  return sequelize.define<CategoryInstance, CategoryAttributes>('products', Category, {
    tableName: 'categories'
  })
}