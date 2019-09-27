import CRUDOperations from '../utils/CRUDOperations';
import db from '../../database/models';
import { CREATED, BAD_REQUEST, OK, NOT_FOUND } from '../../constants/StatusCodes';
import { Request, Response } from 'express';

class Attributes extends CRUDOperations {
    protected model = 'Attributes'
}

export default Attributes;