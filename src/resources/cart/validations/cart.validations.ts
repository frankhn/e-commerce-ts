import { Joi } from 'celebrate'

export const addToCart = Joi.object().keys({
    cart_id: Joi.number().integer().required(),
    product_id: Joi.number().integer().required(),
    attributes: Joi.number().integer().optional(),
    quantity: Joi.number().integer().min(1).max(20).required(),
    buy_now: Joi.string().min(3).max(10).trim().optional()
})

export const updateCart = Joi.object().keys({
    product_id: Joi.number().integer().required(),
    quantity: Joi.number().integer().min(1).max(20)
})