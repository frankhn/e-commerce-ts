"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
/**
 * verify the user token
 */
var verifyToken = /** @class */ (function () {
    /**
     * @author frank harerimana
     * @param {*} req
     * @param {*} res
     * @param {*} next
     * @returns {*} verification
     */
    function verifyToken(req, res, next) {
        this.req = req;
        this.res = res;
        this.next = next;
    }
    /**
     * @author frank harerimana
     * verify the user
     * @returns {*} authentication
     */
    verifyToken.prototype.verify = function () {
        var _this = this;
        var token = this.req.headers.authorization;
        if (!token) {
            return this.res.status(401).send({
                status: 401,
                error: 'authentication failed'
            });
        }
        var split = token.split(' ');
        jsonwebtoken_1.default.verify(split[1], "" + process.env.SECRETKEY, function (error, decoded) {
            if (error) {
                return _this.res.status(401).send({
                    status: 401,
                    error: 'invalid token'
                });
            }
            if (decoded) {
                _this.req.user = decoded.customer;
                _this.next();
            }
        });
    };
    return verifyToken;
}());
exports.default = verifyToken;
//# sourceMappingURL=token.validator.js.map