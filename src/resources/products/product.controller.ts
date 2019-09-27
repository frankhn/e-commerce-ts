import CRUDOperations from '../utils/CRUDOperations';
import { Request, Response } from 'express';
import db from '../../database/models';
class Product extends CRUDOperations {
    protected model = 'Product'


    public productsInACategory = async (req: Request, res: Response) => {
    try {
      const { categoryId } = req.params;
      const productsIdArray: any[] = [];
      const category = await db['Category'].findOne({
        where: { id: categoryId }
      });
      if (!category) {
        return res.status(404).json({
          status: 404,
          message: 'category not found'
        });
      }
      const productsArray = await db['ProductCategory'].findAll({
        attributes: {
          exclude: [
            'createdAt',
            'updatedAt'
          ]
        },
        where: { category_id: categoryId }
      });
      productsArray.map((element: any) => productsIdArray.push(element.dataValues.product_id));
      // find products
      const getProducts = async (id: number) => {
        const res = await db['Product'].findOne({
          attributes: {
            exclude: [
              'createdAt',
              'updatedAt'
            ]
          },
          where: { id }
        });
        return res;
      };
      const productArray = [];

      for (let i = 0; i < productsIdArray.length; i += 1) {
        productArray.push(getProducts(productsIdArray[i]));
      }
      const result = await Promise.all(productArray);
      return res.status(200).json({
        status: 200,
        category: category.name,
        count: result.length,
        result
      });
    } catch (error) {
      res.status(400).json({
        status: 400,
        error
      });
    }
  }


  public productInADepartment = async (req: Request, res: Response) => {
    try {
      const { departmentId } = req.params;
      const categoriesForADepartment: any[] = [];
      const productsArray = await db['Category'].findAll({ where: { department_id: departmentId } });
      productsArray.map((element: any) => categoriesForADepartment.push(element.dataValues.id));
      // find categories in product_categories_table
      const getProductsCategories = async (category_id: number) => {
        const res = await db['ProductCategory'].findOne({ where: { category_id } });
        return res;
      };
      const productCategoryArray = [];

      for (let i = 0; i < categoriesForADepartment.length; i += 1) {
        productCategoryArray.push(getProductsCategories(categoriesForADepartment[i]));
      }
      const productCategories = await Promise.all(productCategoryArray);

      // // product id's
      const productIds: any[] = [];
      productCategories.map((element: any) => productIds.push(element.product_id));

      // find products
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
      const productArray = [];

      for (let i = 0; i < productIds.length; i += 1) {
        productArray.push(getProducts(productIds[i]));
      }
      const result = await Promise.all(productArray);
      res.status(200).json({
        status: 200,
        result
      });
    } catch (error) {
      res.status(400).json({
        status: 400,
        error
      });
    }
  }
}

export default Product;