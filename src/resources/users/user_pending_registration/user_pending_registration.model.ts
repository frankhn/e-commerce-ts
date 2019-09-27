import * as Sequelize from 'sequelize';
import { UserPendingRegistrationAttributes } from './_interface_/user_pending_registration';
import { SequelizeAttributes } from '../../../types';

export type UserPendingRegistrationInstance = Sequelize.Instance<UserPendingRegistrationAttributes> & UserPendingRegistrationAttributes

export const UserPendingRegistrationInit = (sequelize: Sequelize.Sequelize, Sequelize: Sequelize.DataTypes) => {
  const UserPendingRegistration: SequelizeAttributes<UserPendingRegistrationAttributes> = {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: {
            args: [6, 50],
            msg: 'Too long invalid Email Address'
          },
        isEmail: {
          msg: 'invalid Email'
        }
      }
    },
    token: {
      allowNull: false,
      unique: true,
      type: Sequelize.TEXT
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
  return sequelize.define<UserPendingRegistrationInstance, UserPendingRegistrationAttributes>('user_pending_registrations', UserPendingRegistration, {
    tableName: 'user_pending_registrations'
  })
}