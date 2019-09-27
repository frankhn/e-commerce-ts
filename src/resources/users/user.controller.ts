import CRUDOperations from '../utils/CRUDOperations'
import jwt from 'jsonwebtoken'
import db from '../../database/models';
import { Request, Response } from 'express';
import Encrypt from '../../helpers/Encrypt';
import { BAD_REQUEST, OK, CREATED } from '../../constants/StatusCodes';
import UserDataResponse from '../../helpers/data/filter.response';

class User extends CRUDOperations {

    protected model = 'User'

    public profile = async (req: any, res: any) => {
        try {
            let customer = await db[this.model].findOne({
                where: {
                    id: req.user.id
                },
                attributes: {
                    exclude: [
                        'password',
                        'createdAt',
                        'updatedAt'
                    ]
                }
            });
            if (customer) {
                const token = jwt.sign({ customer }, `${process.env.SECRETKEY}`);
                res.status(OK).json({
                    status: OK,
                    customer,
                    accessToken: `Bearer ${token}`
                });
            }
        } catch (error) {
            res.status(BAD_REQUEST).json({
                status: BAD_REQUEST,
                message: 'bad request'
            });
        }
    }


    public login = async (req: any, res: any) => {
        try {
            const { email, password } = req.body;
            let customer = await db[this.model].findOne({
                attributes: {
                    exclude: [
                        'createdAt',
                        'updatedAt'
                    ]
                },
                where: { email }
            },
            );
            if (customer.dataValues) {
                const verify = Encrypt.decrypt(password, customer.dataValues.password);
                customer = new UserDataResponse(customer.dataValues).select();
                if (verify === true) {
                    const token = jwt.sign({ customer }, `${process.env.SECRETKEY}`);
                    res.status(OK).json({
                        status: OK,
                        customer,
                        accessToken: `Bearer ${token}`
                    });
                } else {
                    res.status(BAD_REQUEST).json({
                        status: BAD_REQUEST,
                        message: 'incorrect credentials'
                    });
                }
            }
        } catch (error) {
            res.status(BAD_REQUEST).json({
                status: BAD_REQUEST,
                message: 'invalid email or password',
                error
            });
        }
    }

    public register = async (req: any, res: any) => {
        try {
            const {
                name, email, password
            } = req.body;
            const NewUser = {
                name,
                email,
                password,
            };
            let user = await db[this.model].create(NewUser, {
                attributes: {
                    exclude: [
                        'createdAt',
                        'updatedAt'
                    ]
                }
            });
            if (user) {
                user = new UserDataResponse(user).select();
                const token = jwt.sign({ user }, `${process.env.SECRETKEY}`);
                res.status(CREATED).json({
                    status: CREATED,
                    user,
                    accessToken: `Bearer ${token}`
                });
            }
        } catch (error) {
            res.status(BAD_REQUEST).json({
                status: BAD_REQUEST,
                error: error.errors[0].message
            });
        }
    }
}

export default User;