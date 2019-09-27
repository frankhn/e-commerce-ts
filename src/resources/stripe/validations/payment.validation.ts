import { Joi } from 'celebrate'


export default Joi.object().keys({
    email: Joi.string().email().trim().required(),
    amount: Joi.number().integer().greater(0).required(),
    order_id: Joi.number().integer().greater(0).required(),
    description: Joi.string().trim().required().max(100).min(10),
    currency: Joi.string().trim().min(2).max(5).optional()
})