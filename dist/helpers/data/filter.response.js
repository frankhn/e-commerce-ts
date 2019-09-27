"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __importDefault(require("lodash"));
/**
 * Picker from array
 */
var UserDataResponse = /** @class */ (function () {
    /**
       * @author frank
       * @param  {...any} object
       */
    function UserDataResponse(object) {
        this.user = object;
    }
    /**
     * select data
     * @returns {*} user
     */
    UserDataResponse.prototype.select = function () {
        var user = lodash_1.default.pick(this.user, ['id', 'name', 'email', 'address_1', 'address_2', 'city', 'country', 'postal_code',
            'shipping_region_id', 'day_phone', 'eve_phone', 'region', 'mob_phone', 'credit_card']);
        return user;
    };
    return UserDataResponse;
}());
exports.default = UserDataResponse;
//# sourceMappingURL=filter.response.js.map