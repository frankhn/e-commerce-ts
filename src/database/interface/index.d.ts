import * as Sequelize from 'sequelize';
import { UserInstance } from '../../resources/users/user.model';
import { UserAttributes } from '../../resources/users/_interface_/user';
import { TaxInstance } from '../../resources/tax/tax.model';
import { TaxAttributes } from '../../resources/tax/__interface__/tax';
import { UserPendingRegistrationInstance } from '../../resources/users/user_pending_registration/user_pending_registration.model';
import { UserPendingRegistrationAttributes } from '../../resources/users/user_pending_registration/_interface_/user_pending_registration';
import { CartInstance } from '../../resources/cart/cart.model';
import { CartAttributes } from '../../resources/cart/__interface__/cart';

export interface DBInterface {
    sequelize: Sequelize.Sequelize;
    Sequelize: Sequelize.SequelizeStatic;
    User: Sequelize.Model<UserInstance, UserAttributes>;
    Tax: Sequelize.Model<TaxInstance, TaxAttributes>;
    Cart: Sequelize.Model<CartInstance, CartAttributes>
    UserPendingRegistration: Sequelize.Model<UserPendingRegistrationInstance, UserPendingRegistrationAttributes>
}