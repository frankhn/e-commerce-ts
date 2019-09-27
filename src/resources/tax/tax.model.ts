import * as Sequelize from 'sequelize';
import { SequelizeAttributes }  from '../../types'
import { TaxAttributes } from './__interface__/tax';


// instance
export type TaxInstance = Sequelize.Instance<TaxAttributes> & TaxAttributes

export const TaxInit = (sequelize: Sequelize.Sequelize, Sequelize: Sequelize.DataTypes) => {
  const tax: SequelizeAttributes<TaxAttributes> = {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: Sequelize.INTEGER
    },
    tax_type: {
      type: Sequelize.STRING,
      allowNull: false
    },
    tax_percentage: {
      type: Sequelize.REAL,
    }
  }
  const Tax = sequelize.define<TaxInstance, TaxAttributes>('taxes', tax, {
    tableName: 'taxes'
  })
  return Tax;
};