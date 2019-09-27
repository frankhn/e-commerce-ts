import CRUDOperations from '../../utils/CRUDOperations';
import db from '../../../database/models';
import { CREATED, BAD_REQUEST, OK, NOT_FOUND } from '../../../constants/StatusCodes';
import { Request, Response } from 'express';

class Attributes_values extends CRUDOperations {
    protected model = 'Attributes_values'

    public attributeValues = async (req: any, res: any) => {
    try {
      const attributes = await db[this.model].findOne({
        where: { attribute_id: req.params.attributeID }
      });
      res.status(OK).json({
        status: OK,
        list: attributes,
      });
    } catch (error) {
      res.status(BAD_REQUEST).json({
        status: BAD_REQUEST,
        message: error,
      });
    }
  }
}

export default Attributes_values;