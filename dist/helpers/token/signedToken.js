"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
var SECRETKEY = process.env.SECRETKEY;
/**
 * @author frank harerimana
 */
var SignedToken = /** @class */ (function () {
    function SignedToken() {
    }
    /**
     * @param {*} email
     * @returns {*} registration token
     */
    SignedToken.prototype.registration = function (email) {
        return jsonwebtoken_1.default.sign({ email: email }, "" + SECRETKEY, { expiresIn: '1d' }); // expires in 1 day
    };
    /**
     * @param {*} args
     * @returns {*} registration token
     */
    SignedToken.prototype.login = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var user = {
            id: args[0].id,
            username: args[0].username,
        };
        return jsonwebtoken_1.default.sign({ user: user }, "" + SECRETKEY, { expiresIn: '1d' }); // expires in 1 day
    };
    return SignedToken;
}());
exports.default = SignedToken;
//# sourceMappingURL=signedToken.js.map