"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var celebrate_1 = require("celebrate");
var StatusCodes_1 = require("../constants/StatusCodes");
var CelebrateError = function () { return function (err, req, res, next) {
    if (!celebrate_1.isCelebrate(err))
        return next(err);
    return res.status(StatusCodes_1.BAD_REQUEST).json({
        status: StatusCodes_1.BAD_REQUEST,
        message: 'Bad Request',
        errors: err.joi.details || undefined,
    });
}; };
exports.default = CelebrateError;
//# sourceMappingURL=CelebrateErrorResponse.js.map