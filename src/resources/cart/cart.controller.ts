import CRUDOperations from '../utils/CRUDOperations';
import db from '../../database/models';
import { CREATED, BAD_REQUEST, OK, NOT_FOUND } from '../../constants/StatusCodes';
import { Request, Response } from 'express';

class Cart extends CRUDOperations {
    protected model = 'Cart'

    public listOfProductsInCart = async (req: any, res: any, next: any) => {
    try {
      const { cartId } = req.params;
      const cart = await db[this.model].findOne({
        where: { cart_id: cartId }
      });
      if (!cart) {
        res.status(NOT_FOUND).json({
          status: NOT_FOUND,
          message: `no cart found with ID ${cartId}`
        });
      } else {
        const cartProduct: any[] = [];
        const cartProducts = await db[this.model].findAll({
          attributes: {
            exclude: [
              'createdAt',
              'updatedAt'
            ]
          },
          where: { cart_id: cartId }
        });
        cartProducts.map((element: { dataValues: { product_id: any; }; }) => cartProduct.push(element.dataValues.product_id ));
        // find products
        const getProducts = async (id: any) => {
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

        for (let i = 0; i < cartProduct.length; i += 1) {
          productArray.push(getProducts(cartProduct[i]));
        }
        const products = await Promise.all(productArray);
        res.status(OK).json({
          status: OK,
          products
        });
      }
    } catch (error) {
      res.status(OK).json({
        status: OK,
        error
      });
    }
  }


  public updateCartByItem = async (req: { params: { cartId: any; }; body: { quantity: any; product_id: any; }; }, res: any ) => {
    try {
      const { cartId } = req.params;
      const cartProduct: any[] = [];
      const { quantity, product_id } = req.body;
      const cart = await db[this.model].findAll({
        where: { cart_id: cartId }
      });
      if (!cart) {
        res.status(OK).json({
          status: OK,
          message: `no cart found with ID ${cartId}`
        });
      } else {
        await db[this.model].update({ quantity },
          { where: { cart_id: cartId, product_id } });
        // update cart
        const cartProducts = await db[this.model].findAll({
          attributes: {
            exclude: [
              'createdAt',
              'updatedAt'
            ]
          },
          where: { cart_id: cartId }
        });
        cartProducts.map((element: { dataValues: { product_id: any; }; }) => cartProduct.push(element.dataValues.product_id));
        // find products
        const getProducts = async (id: any) => {
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

        for (let i = 0; i < cartProduct.length; i += 1) {
          productArray.push(getProducts(cartProduct[i]));
        }
        const Cart_Products = await Promise.all(productArray);
        res.status(CREATED).json({
          status: CREATED,
          Cart_Products
        });
      }
    } catch (error) {
      res.status(BAD_REQUEST).json({
        status: BAD_REQUEST,
        error
      });
    }
  }


  public emptyCart = async (req: Request, res: Response) => {
    try {
      const { cartId } = req.params;
      const cart = await db[this.model].findOne({
        where: { cart_id: cartId }
      });
      if (!cart) {
        res.status(NOT_FOUND).json({
          status: NOT_FOUND,
          message: `no cart found with ID ${cartId}`
        });
      } else {
        const emptyCart = await db[this.model].destroy({
          where: { cart_id: cartId }
        });
        res.status(CREATED).json({
          status: CREATED,
          emptyCart
        });
      }
    } catch (error) {
      res.status(BAD_REQUEST).json({
        status: BAD_REQUEST,
        error
      });
    }
  }

  public TotalAmountFromCart = async (req: Request, res: Response) => {
    try {
      const { cartId } = req.params;
      const cart = await db[this.model].findOne({
        where: { cart_id: cartId }
      });
      if (!cart) {
        res.status(404).json({
          status: 404,
          message: `no cart found with ID ${cartId}`
        });
      }
      const cartProduct: any[] = [];
      const cartProducts = await db[this.model].findAll({
        attributes: {
          exclude: [
            'createdAt',
            'updatedAt'
          ]
        },
        where: { cart_id: cartId }
      });
      cartProducts.map((element: { dataValues: { product_id: any; }; }) => cartProduct.push(element.dataValues.product_id));
      // find products
      const getProducts = async (id: any) => {
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

      for (let i = 0; i < cartProduct.length; i += 1) {
        productArray.push(getProducts(cartProduct[i]));
      }
      const products = await Promise.all(productArray);
      const amounts: number[] = [];
      products.map((element: any) => {
        const priceAmount = element.price;
        const convertToNumber = parseFloat(priceAmount);
        return amounts.push(convertToNumber);
      });
      const summation = (total: number, num: number) => total + num;
      const totals = amounts.reduce(summation);
      res.status(201).json({
        status: 201,
        Amount: totals
      });
    } catch (error) {
      res.status(400).json({
        status: 400,
        error
      });
    }
  }
}

export default Cart;