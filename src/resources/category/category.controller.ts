import CRUDOperations from '../utils/CRUDOperations';
import { Request, Response } from 'express';
import db from '../../database/models';
class Category extends CRUDOperations {
    protected model = 'Category'

    public productCategories = async (req: Request, res: Response) => {
    try {
      const { productID } = req.params;
      const categoryIDS: any[] = [];
      const categories = await db['ProductCategory'].findAll({ where: { product_id: productID } });
      categories.map((element: any) => categoryIDS.push(element.category_id));

      const getProducts = async (id: any) => {
        const res = await db[this.model].findOne({
          attributes: {
            exclude: [
              'createdAt',
              'updatedAt'
            ]
          },
          where: { id }
        });
        return res.dataValues;
      };
      const categoriesArray = [];

      for (let i = 0; i < categoryIDS.length; i += 1) {
        categoriesArray.push(getProducts(categoryIDS[i]));
      }
      const result = await Promise.all(categoriesArray);
      res.status(200).json({
        status: 200,
        category: result
      });
    } catch (error) {
      res.status(400).json({
        status: 400,
        error: error.errors[0].message
      });
    }
  }

  public categoriesInADepartment = async (req: Request, res: Response) => {
    try {
      const { departmentID } = req.params;
      const categories = await db[this.model].findAll({
        attributes: {
          exclude: [
            'createdAt',
            'updatedAt'
          ]
        },
        where: { department_id: departmentID }
      });
      res.status(200).json({
        status: 200,
        count: categories.length,
        response: categories
      });
    } catch (error) {
      res.status(400).json({
        status: 400,
        error
      });
    }
  }
}

export default Category;