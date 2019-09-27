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
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    firstname: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [2, 100],
          msg: 'was that a name'
        },
      }
    },
    lastname: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [2, 100],
          msg: 'was that a name'
        },
      }
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: {
          args: [3, 50],
          msg: 'username must be at least 2 characters'
        },
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
    birth_day: {
      type: Sequelize.DATE,
      allowNull: true
    },
    password: {
      type: Sequelize.TEXT,
      allowNull: true,
      validate: {
        validate() {
          this.password = Encrypt.encrypt(this.password);
        }
      }
    },
    role: {
      type: Sequelize.ENUM('super', 'admin', 'user', 'seller', 'staff'),
      defaultValue: 'user'
    },
    avatar: {
      type: Sequelize.STRING,
      allowNull: true
    },
    city: {
      type: Sequelize.ARRAY(Sequelize.UUID),
      allowNull: false
    },
    country: {
      type: Sequelize.ARRAY(Sequelize.UUID),
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
  return sequelize.define<UserInstance, UserAttributes>('users', user, {
    tableName: 'users'
  })
};