import * as Sequelize from 'sequelize';
import { SequelizeAttributes }  from '../../types'
import { UserAttributes } from './_interface_/user';
import Encrypt from '../../helpers/Encrypt';

// instance
export type UserInstance = Sequelize.Instance<UserAttributes> & UserAttributes

export const UserInit = (sequelize: Sequelize.Sequelize, Sequelize: Sequelize.DataTypes) => {
  const user: SequelizeAttributes<UserAttributes> = {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING(50),
      allowNull: false,
       validate: {
        is: ['^[a-z]+$', 'i'],
        notEmpty: true,
      }
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
      validate: {
        len: {
          args: [6, 128],
          msg: 'Email address must be between 6 and 50 characters in length'
        },
        isEmail: {
          msg: 'Email address must be valid'
        }
      }
    },
    password: {
      type: Sequelize.STRING(100),
      allowNull: false,
      validate: {
        validate() {
          this.password = Encrypt.encrypt(this.password);
        }
      }
    },
    credit_card: {
      type: Sequelize.TEXT,
      allowNull: true,
      validate: {
        isCreditCard: true,
      }
    },
    region: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    address_1: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    address_2: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    city: {
      type: Sequelize.STRING,
      allowNull: true
    },
    country: {
      type: Sequelize.STRING,
      allowNull: true
    },
    postal_code: {
      type: Sequelize.STRING(100),
      allowNull: true,
      validate: {
        isNumeric: true,
      }
    },
    shipping_region_id: {
      type: Sequelize.INTEGER,
      defaultValue: 1,
    },
    day_phone: {
      type: Sequelize.STRING(100),
      allowNull: true,
      validate: {
        isNumeric: true,
      }
    },
    eve_phone: {
      type: Sequelize.STRING(100),
      allowNull: true,
      validate: {
        isNumeric: true,
      }
    },
    mob_phone: {
      type: Sequelize.STRING(100),
      allowNull: true,
      validate: {
        isNumeric: true,
      }
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
  return sequelize.define<UserInstance, UserAttributes>('customer', user, {
    tableName: 'customers'
  })
};