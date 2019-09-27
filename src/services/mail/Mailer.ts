/* eslint-disable class-methods-use-this */
import nodemailer from 'nodemailer';
import 'dotenv/config';
class Mailer {

   /**
     * @author frank harerimana
     * @param {*} to
     * @param {*} template
     * @param {*} action/link
     * @returns {*} send email entry
     */
  public static email(data: any): any {
    const transport =  nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.userEmail,
        pass: process.env.userEmailPassword
      },
  })
  /**
   * waiting to add a template loader
   */
  const {to, link} = data
  const message = {
    to,
    html: `follow the link to register your on camden <a href='${link}'>register</a>`,
    subject: 'Signup at Camden'
  }
  return transport.sendMail(message)
  }
}
export default Mailer;
