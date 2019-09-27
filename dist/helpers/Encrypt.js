"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bcryptjs_1 = __importDefault(require("bcryptjs"));
/**
 * Encryption handler
 */
var Encrypt = /** @class */ (function () {
    function Encrypt() {
    }
    /**
       * @author frank harerimana
       * @param {*} _value
       * @returns {*} value
       */
    Encrypt.salt = function () {
        return bcryptjs_1.default.genSaltSync(10);
    };
    /**
   * @author frank harerimana
   * encrypting method
   * @returns {*} encrypted value
   */
    Encrypt.encrypt = function (value) {
        return bcryptjs_1.default.hashSync(value, this.salt());
    };
    /**
   * @author frank harerimana
   * @param {*} storedValue
   * @returns {*} true or false
   */
    Encrypt.decrypt = function (value, storedValue) {
        return bcryptjs_1.default.compareSync(value, storedValue);
    };
    return Encrypt;
}());
exports.default = Encrypt;
//# sourceMappingURL=Encrypt.js.map