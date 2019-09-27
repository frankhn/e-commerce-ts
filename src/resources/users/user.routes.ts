import express from 'express';
import { celebrate } from 'celebrate'
import User from './user.controller';
import * as validation from './validations/user.validations'
import VerifyRegisterEmail from './user_pending_registration/validations/verify.validation'
import UserPendingRegistration from './user_pending_registration/user_pending_registration.controller';

const user = new User();
const userPendingRegistration = new UserPendingRegistration()

/** ******************************************* */

const user_router = express.Router();

/** ******************************************* */

user_router
.route('/register/:token')
.all()
.post(celebrate({ body: validation.signup}) ,user.createOne)

user_router
.route('/verify')
.post( celebrate({ body: VerifyRegisterEmail}), userPendingRegistration.verifyUser)

user_router
.route('/login')
.post(user.readOne)

export default user_router;