import jwt from 'jsonwebtoken';
import 'dotenv/config';

const { SECRETKEY } = process.env
/**
 * @author frank harerimana
 */
export default class SignedToken {
  /**
   * @param {*} email
   * @returns {*} registration token
   */
  registration(email: string): string {
    return jwt.sign({ email }, `${SECRETKEY}`, { expiresIn: '1d' }); // expires in 1 day
  }

  /**
   * @param {*} args
   * @returns {*} registration token
   */
  login(...args: any): any {
    const user = {
      id: args[0].id,
      username: args[0].username,
    };
    return jwt.sign({ user }, `${SECRETKEY}`, { expiresIn: '1d' }); // expires in 1 day
  }
}

