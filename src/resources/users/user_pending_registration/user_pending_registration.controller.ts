import CRUDOperations from "../../utils/CRUDOperations";
import { Request, Response, NextFunction } from 'express'
import SignedToken from '../../../helpers/token/signedToken';
import Event from '../../../helpers/events/index'
import db from "../../../database/models";
import { OK, BAD_REQUEST, FOUND } from '../../../constants/StatusCodes';

const signedToke = new SignedToken()
Event.on('email', args => Event.email(args))
export default class UserPendingRegistration extends CRUDOperations {
    protected model = 'UserPendingRegistration'

    // private sendRegistrationLink = async () {}

    public verifyUser = async (req: Request, res: Response) => {
        try {
            const { email } = req.body
            const token = signedToke.registration(email)
            const PendingUser = {
                email,
                token
            }
            await db[this.model].create(PendingUser)
            const eventData = {
                to: email,
                link: token
            }
            Event.emit('email', eventData)
            return res.status(OK).json({
                status: OK,
                message: 'An email has been sent'
            })
        } catch (error) {
            if (error.errors[0].message === 'email must be unique') {
                return res.status(FOUND).json({
                    status: FOUND,
                    message: 'email has been sent, try to resend if no email was received'
                })
            }
            return res.status(BAD_REQUEST).json({
                status: BAD_REQUEST,
                error
            })
        }
    }
}
