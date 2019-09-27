import express from 'express';
import Payment from './payment.controller';
import { celebrate } from 'celebrate';
import validation from './validations/payment.validation'

const payment_router = express.Router();

// create car instance
const payment = new Payment();

payment_router
.route('/charge')
.post(celebrate({ body: validation }), payment.charge);

payment_router.post('/webHooks', payment.charge);


export default payment_router;
