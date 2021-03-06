import CRUDOperations from '../utils/CRUDOperations';
import { Request, Response } from 'express';
import db from '../../database/models';
import * as Sequelize from 'sequelize';
import { OK, BAD_REQUEST } from '../../constants/StatusCodes';

const Op = Sequelize.Op
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
        return res.status(BAD_REQUEST).json({
          status: BAD_REQUEST,
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
      return res.status(OK).json({
        status: OK,
        category: category.name,
        count: result.length,
        result
      });
    } catch (error) {
      res.status(BAD_REQUEST).json({
        status: BAD_REQUEST,
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
      res.status(OK).json({
        status: OK,
        result
      });
    } catch (error) {
      res.status(BAD_REQUEST).json({
        status: BAD_REQUEST,
        error
      });
    }
  }

  public search = async (req: any, res: any) => {
    try {
      const { term } = req.query;
    const result = await db[this.model].findAll({
      attributes: {
            exclude: [
              'createdAt',
              'updatedAt'
            ]
          },
      where: {
        [Op.or]: {
          name: {
          [Op.iLike]: '%'+ term + '%',
        },
        description: {
          [Op.iLike]: '%'+ term + '%'
        }
        }
      }
    })
    if (result.length >0) {
      return res.status(OK).json({
      status: OK,
      message: 'Search results',
      result
    })
    }
    return res.status(OK).json({
      status: OK,
      message: 'no products found'
    })
    } catch (error) {
      res.status(BAD_REQUEST).json({
        status: BAD_REQUEST,
        message: 'an error occurred',
        error
      })
    }
  }
}

export default Product;