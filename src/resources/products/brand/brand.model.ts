import * as Sequelize from 'sequelize';
import { BrandAttributes } from './interface/brand';
import { SequelizeAttributes } from '../../../types';

export type BrandInstance = Sequelize.Instance<BrandAttributes> & BrandAttributes

export const BrandInit = (sequelize: Sequelize.Sequelize, Sequelize: Sequelize.DataTypes) => {
  const Brand: SequelizeAttributes<BrandAttributes> = {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    image: {
      type: Sequelize.STRING,
      allowNull: true
    },
    user_id: {
      type: Sequelize.UUID,
      allowNull: false,
      defaultValue: Sequelize.UUIDV4
    },
    city: {
      allowNull: true,
      type: Sequelize.ARRAY(Sequelize.UUID)
    },
    country: {
      type: Sequelize.ARRAY(Sequelize.UUID),
      allowNull: true
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
  return sequelize.define<BrandInstance, BrandAttributes>('brand', Brand, {
    tableName: 'brands'
  })
}