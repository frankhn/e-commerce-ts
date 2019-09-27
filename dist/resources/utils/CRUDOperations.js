"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = __importDefault(require("../../database/models"));
var StatusCodes_1 = require("../../constants/StatusCodes");
var CRUDOperations = /** @class */ (function () {
    function CRUDOperations() {
        var _this = this;
        this.model = '';
        this.createOne = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, models_1.default[this.model].create(req.body)];
                    case 1:
                        result = _a.sent();
                        res.status(StatusCodes_1.OK).json({
                            status: StatusCodes_1.OK,
                            data: result
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        res.status(StatusCodes_1.BAD_REQUEST).json({
                            status: StatusCodes_1.BAD_REQUEST,
                            error: error_1
                        });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.readOne = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var id, result, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.params.id;
                        return [4 /*yield*/, models_1.default[this.model].findOne({
                                where: {
                                    id: id
                                },
                                attributes: {
                                    exclude: [
                                        'createdAt',
                                        'updatedAt'
                                    ]
                                }
                            })];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            return [2 /*return*/, res.status(StatusCodes_1.OK).json({
                                    status: StatusCodes_1.OK,
                                    result: result
                                })];
                        }
                        return [2 /*return*/, res.status(StatusCodes_1.NOT_FOUND).json({
                                status: StatusCodes_1.NOT_FOUND,
                                message: 'Not Found'
                            })];
                    case 2:
                        error_2 = _a.sent();
                        return [2 /*return*/, res.status(StatusCodes_1.BAD_REQUEST).json({
                                status: StatusCodes_1.BAD_REQUEST,
                                error: error_2
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.update = function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); }); };
        this.deleteOne = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var result, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, models_1.default[this.model].destroy({
                                where: {
                                    id: req.params.id
                                }
                            })];
                    case 1:
                        result = _a.sent();
                        res.status(StatusCodes_1.CREATED).json({
                            status: StatusCodes_1.CREATED,
                            count: result.length,
                            rows: result,
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        res.status(StatusCodes_1.BAD_REQUEST).json({
                            status: StatusCodes_1.BAD_REQUEST,
                            error: error_3
                        });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.getMany = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var result, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, models_1.default[this.model].findAll({
                                attributes: {
                                    exclude: [
                                        'createdAt',
                                        'updatedAt'
                                    ]
                                }
                            })];
                    case 1:
                        result = _a.sent();
                        res.status(StatusCodes_1.OK).json({
                            status: 200,
                            count: result.length,
                            rows: result,
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        res.status(StatusCodes_1.BAD_REQUEST).json({
                            status: StatusCodes_1.BAD_REQUEST,
                            error: error_4
                        });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.getManyByID = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var result, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, models_1.default[this.model].findAll({
                                attributes: {
                                    exclude: [
                                        'createdAt',
                                        'updatedAt'
                                    ]
                                },
                                where: { id: req.params.id }
                            })];
                    case 1:
                        result = _a.sent();
                        res.status(StatusCodes_1.OK).json({
                            status: 200,
                            count: result.length,
                            rows: result,
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _a.sent();
                        res.status(StatusCodes_1.BAD_REQUEST).json({
                            status: StatusCodes_1.BAD_REQUEST,
                            error: error_5
                        });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
    }
    return CRUDOperations;
}());
exports.default = CRUDOperations;
//# sourceMappingURL=CRUDOperations.js.map