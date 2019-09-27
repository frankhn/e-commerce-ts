"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable class-methods-use-this */
var nodemailer_1 = __importDefault(require("nodemailer"));
require("dotenv/config");
var Mailer = /** @class */ (function () {
    function Mailer() {
    }
    /**
      * @author frank harerimana
      * @param {*} to
      * @param {*} template
      * @param {*} action/link
      * @returns {*} send email entry
      */
    Mailer.email = function (data) {
        var transport = nodemailer_1.default.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.userEmail,
                pass: process.env.userEmailPassword
            },
        });
        /**
         * waiting to add a template loader
         */
        var to = data.to, link = data.link;
        var message = {
            to: to,
            html: "follow the link to register your on camden <a href='" + link + "'>register</a>",
            subject: 'Signup at Camden'
        };
        return transport.sendMail(message);
    };
    return Mailer;
}());
exports.default = Mailer;
//# sourceMappingURL=Mailer.js.map