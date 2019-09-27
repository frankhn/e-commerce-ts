import express from 'express';
import { celebrate } from 'celebrate'
import Tax from './tax.controller';

const tax = new Tax();

/** ******************************************* */

const tax_router = express.Router();

/** ******************************************* */

tax_router
.route('/')
.all()
.get(tax.getMany)

tax_router
.route('/:id(\\d+)')
.all()
.get(tax.readOne)

export default tax_router;