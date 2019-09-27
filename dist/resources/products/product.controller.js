"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var CRUDOperations_1 = __importDefault(require("../utils/CRUDOperations"));
var models_1 = __importDefault(require("../../database/models"));
var Product = /** @class */ (function (_super) {
    __extends(Product, _super);
    function Product() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = 'Product';
        _this.productsInACategory = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var categoryId, productsIdArray_1, category, productsArray, getProducts, productArray, i, result, error_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        categoryId = req.params.categoryId;
                        productsIdArray_1 = [];
                        return [4 /*yield*/, models_1.default['Category'].findOne({
                                where: { id: categoryId }
                            })];
                    case 1:
                        category = _a.sent();
                        if (!category) {
                            return [2 /*return*/, res.status(404).json({
                                    status: 404,
                                    message: 'category not found'
                                })];
                        }
                        return [4 /*yield*/, models_1.default['ProductCategory'].findAll({
                                attributes: {
                                    exclude: [
                                        'createdAt',
                                        'updatedAt'
                                    ]
                                },
                                where: { category_id: categoryId }
                            })];
                    case 2:
                        productsArray = _a.sent();
                        productsArray.map(function (element) { return productsIdArray_1.push(element.dataValues.product_id); });
                        getProducts = function (id) { return __awaiter(_this, void 0, void 0, function () {
                            var res;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, models_1.default['Product'].findOne({
                                            attributes: {
                                                exclude: [
                                                    'createdAt',
                                                    'updatedAt'
                                                ]
                                            },
                                            where: { id: id }
                                        })];
                                    case 1:
                                        res = _a.sent();
                                        return [2 /*return*/, res];
                                }
                            });
                        }); };
                        productArray = [];
                        for (i = 0; i < productsIdArray_1.length; i += 1) {
                            productArray.push(getProducts(productsIdArray_1[i]));
                        }
                        return [4 /*yield*/, Promise.all(productArray)];
                    case 3:
                        result = _a.sent();
                        return [2 /*return*/, res.status(200).json({
                                status: 200,
                                category: category.name,
                                count: result.length,
                                result: result
                            })];
                    case 4:
                        error_1 = _a.sent();
                        res.status(400).json({
                            status: 400,
                            error: error_1
                        });
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        _this.productInADepartment = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var departmentId, categoriesForADepartment_1, productsArray, getProductsCategories, productCategoryArray, i, productCategories, productIds_1, getProducts, productArray, i, result, error_2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        departmentId = req.params.departmentId;
                        categoriesForADepartment_1 = [];
                        return [4 /*yield*/, models_1.default['Category'].findAll({ where: { department_id: departmentId } })];
                    case 1:
                        productsArray = _a.sent();
                        productsArray.map(function (element) { return categoriesForADepartment_1.push(element.dataValues.id); });
                        getProductsCategories = function (category_id) { return __awaiter(_this, void 0, void 0, function () {
                            var res;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, models_1.default['ProductCategory'].findOne({ where: { category_id: category_id } })];
                                    case 1:
                                        res = _a.sent();
                                        return [2 /*return*/, res];
                                }
                            });
                        }); };
                        productCategoryArray = [];
                        for (i = 0; i < categoriesForADepartment_1.length; i += 1) {
                            productCategoryArray.push(getProductsCategories(categoriesForADepartment_1[i]));
                        }
                        return [4 /*yield*/, Promise.all(productCategoryArray)];
                    case 2:
                        productCategories = _a.sent();
                        productIds_1 = [];
                        productCategories.map(function (element) { return productIds_1.push(element.product_id); });
                        getProducts = function (id) { return __awaiter(_this, void 0, void 0, function () {
                            var res;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, models_1.default[this.model].findOne({
                                            attributes: {
                                                exclude: [
                                                    'createdAt',
                                                    'updatedAt'
                                                ]
                                            },
                                            where: { id: id }
                                        })];
                                    case 1:
                                        res = _a.sent();
                                        return [2 /*return*/, res.dataValues];
                                }
                            });
                        }); };
                        productArray = [];
                        for (i = 0; i < productIds_1.length; i += 1) {
                            productArray.push(getProducts(productIds_1[i]));
                        }
                        return [4 /*yield*/, Promise.all(productArray)];
                    case 3:
                        result = _a.sent();
                        res.status(200).json({
                            status: 200,
                            result: result
                        });
                        return [3 /*break*/, 5];
                    case 4:
                        error_2 = _a.sent();
                        res.status(400).json({
                            status: 400,
                            error: error_2
                        });
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    return Product;
}(CRUDOperations_1.default));
exports.default = Product;
//# sourceMappingURL=product.controller.js.map