import Sequelize from 'sequelize';
import dotenv from 'dotenv'
import { DBInterface } from '../interface/index';
import { UserInit } from '../../resources/users/user.model';
import { TaxInit } from '../../resources/tax/tax.model';
import { UserPendingRegistrationInit } from '../../resources/users/user_pending_registration/user_pending_registration.model';
import { CartInit } from '../../resources/cart/cart.model';

dotenv.config()

const env =  process.env.NODE_ENV || "development"
const configDb = require('../config')[env]
const url = configDb.url || process.env.DATABASE_CONNECTION_URL;

const sequelize = new Sequelize(url as string, configDb);

const db: DBInterface = {
  sequelize,
  Sequelize: Sequelize.Sequelize,
  User: UserInit(sequelize, Sequelize),
  Tax: TaxInit(sequelize, Sequelize),
  Cart: CartInit(sequelize, Sequelize),
  UserPendingRegistration: UserPendingRegistrationInit(sequelize, Sequelize)
}

Object.keys(db).forEach((ModelName) => {
  if (db[ModelName].associate) {
    db[ModelName].associate(db)
  }
});

export default db;