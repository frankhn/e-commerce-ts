import jwt from 'jsonwebtoken';
import 'dotenv/config';
/** *******************************************
 * Class Token Validator
 */
class Token {
//   /**
//    * @author frank harerimana
//    * @param {*} req
//    * @param {*} res
//    * @param {*} next
//    * @returns {*} verification
//    ********************************************** */

//   /**
//    * @author frank harerimana
//    * @returns {*} authentication
//    ********************************************** */
//   public static validate(token: any) {
//     jwt.verify(token[1], process.env.SECRETKEY, (error: any, decoded: { user: any; }) => {
//       if (error) {
//         return error;
//       }
//       return decoded.user;
//     });
//   }


//   /**
//    * @author frank harerimana
//    * @returns {*} Token
//    ********************************************** */
//   public static checkToken(req: { headers: { authorization: any; }; }, res: any): void {
//     if (req.headers.authorization) {
//       return res.status(401).send({
//         status: 401,
//         error: 'authentication failed'
//       });
//     }
//     const token = req.headers.authorization.split(' ')

//     let payload;
//     try {
//       payload = <any>jwt.verify(token, process.env.SECRETKEY)
//     } catch (error) {
      
//     }
//   }
}

export default Token;
