import CRUDOperations from '../../utils/CRUDOperations';
import db from '../../../database/models';
import { OK, BAD_REQUEST, CREATED } from '../../../constants/StatusCodes';

class Review extends CRUDOperations {
    protected model = 'Review'


  public createReview = async (req: any, res: any) => {
    try {
      const product_id = req.params.id;
      const customer_id = req.user.id;
      const {
        review, rating
      } = req.body;
      const data = {
        customer_id, product_id, review, rating
      };
      const product = await db[this.model].create(data);
    //   const result = new ReviewSelector(product).select();
      res.status(CREATED).json({
        status: CREATED,
        data: product
      });
    } catch (error) {
      res.status(BAD_REQUEST).json({
        status: BAD_REQUEST,
        error
      });
    }
  }


  public productReview = async (req: any, res: any)  => {
    try {
      const { id } = req.params;
      const product = await db[this.model].findAll({
        attributes: {
          exclude: [
            'createdAt',
            'updatedAt'
          ]
        },
        where: { product_id: id }
      });
      res.status(OK).json({
        status: OK,
        data: product
      });
    } catch (error) {
      res.status(BAD_REQUEST).json({
        status: BAD_REQUEST,
        error
      });
    }
  }
}

export default Review;