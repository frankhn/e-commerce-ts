import { Joi } from 'celebrate';

export default Joi.object().keys({
    email: Joi.string().email().trim().lowercase().replace('#!$%&’*+-/=?^_`{}|~', '').required()
})