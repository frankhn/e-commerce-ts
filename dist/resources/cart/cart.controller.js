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
var StatusCodes_1 = require("../../constants/StatusCodes");
var Cart = /** @class */ (function (_super) {
    __extends(Cart, _super);
    function Cart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = 'Cart';
        _this.listOfProductsInCart = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var cartId, cart, cartProduct_1, cartProducts, getProducts, productArray, i, products, error_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        cartId = req.params.cartId;
                        return [4 /*yield*/, models_1.default[this.model].findOne({
                                where: { cart_id: cartId }
                            })];
                    case 1:
                        cart = _a.sent();
                        if (!!cart) return [3 /*break*/, 2];
                        res.status(StatusCodes_1.NOT_FOUND).json({
                            status: StatusCodes_1.NOT_FOUND,
                            message: "no cart found with ID " + cartId
                        });
                        return [3 /*break*/, 5];
                    case 2:
                        cartProduct_1 = [];
                        return [4 /*yield*/, models_1.default[this.model].findAll({
                                attributes: {
                                    exclude: [
                                        'createdAt',
                                        'updatedAt'
                                    ]
                                },
                                where: { cart_id: cartId }
                            })];
                    case 3:
                        cartProducts = _a.sent();
                        cartProducts.map(function (element) { return cartProduct_1.push(element.dataValues.product_id); });
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
                        for (i = 0; i < cartProduct_1.length; i += 1) {
                            productArray.push(getProducts(cartProduct_1[i]));
                        }
                        return [4 /*yield*/, Promise.all(productArray)];
                    case 4:
                        products = _a.sent();
                        res.status(StatusCodes_1.OK).json({
                            status: StatusCodes_1.OK,
                            products: products
                        });
                        _a.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_1 = _a.sent();
                        res.status(StatusCodes_1.OK).json({
                            status: StatusCodes_1.OK,
                            error: error_1
                        });
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        }); };
        _this.updateCartByItem = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var cartId, cartProduct_2, _a, quantity, product_id, cart, cartProducts, getProducts, productArray, i, Cart_Products, error_2;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 7, , 8]);
                        cartId = req.params.cartId;
                        cartProduct_2 = [];
                        _a = req.body, quantity = _a.quantity, product_id = _a.product_id;
                        return [4 /*yield*/, models_1.default[this.model].findAll({
                                where: { cart_id: cartId }
                            })];
                    case 1:
                        cart = _b.sent();
                        if (!!cart) return [3 /*break*/, 2];
                        res.status(StatusCodes_1.OK).json({
                            status: StatusCodes_1.OK,
                            message: "no cart found with ID " + cartId
                        });
                        return [3 /*break*/, 6];
                    case 2: return [4 /*yield*/, models_1.default[this.model].update({ quantity: quantity }, { where: { cart_id: cartId, product_id: product_id } })];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, models_1.default[this.model].findAll({
                                attributes: {
                                    exclude: [
                                        'createdAt',
                                        'updatedAt'
                                    ]
                                },
                                where: { cart_id: cartId }
                            })];
                    case 4:
                        cartProducts = _b.sent();
                        cartProducts.map(function (element) { return cartProduct_2.push(element.dataValues.product_id); });
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
                        for (i = 0; i < cartProduct_2.length; i += 1) {
                            productArray.push(getProducts(cartProduct_2[i]));
                        }
                        return [4 /*yield*/, Promise.all(productArray)];
                    case 5:
                        Cart_Products = _b.sent();
                        res.status(StatusCodes_1.CREATED).json({
                            status: StatusCodes_1.CREATED,
                            Cart_Products: Cart_Products
                        });
                        _b.label = 6;
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        error_2 = _b.sent();
                        res.status(StatusCodes_1.BAD_REQUEST).json({
                            status: StatusCodes_1.BAD_REQUEST,
                            error: error_2
                        });
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        }); };
        _this.emptyCart = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var cartId, cart, emptyCart, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        cartId = req.params.cartId;
                        return [4 /*yield*/, models_1.default[this.model].findOne({
                                where: { cart_id: cartId }
                            })];
                    case 1:
                        cart = _a.sent();
                        if (!!cart) return [3 /*break*/, 2];
                        res.status(StatusCodes_1.NOT_FOUND).json({
                            status: StatusCodes_1.NOT_FOUND,
                            message: "no cart found with ID " + cartId
                        });
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, models_1.default[this.model].destroy({
                            where: { cart_id: cartId }
                        })];
                    case 3:
                        emptyCart = _a.sent();
                        res.status(StatusCodes_1.CREATED).json({
                            status: StatusCodes_1.CREATED,
                            emptyCart: emptyCart
                        });
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_3 = _a.sent();
                        res.status(StatusCodes_1.BAD_REQUEST).json({
                            status: StatusCodes_1.BAD_REQUEST,
                            error: error_3
                        });
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        _this.TotalAmountFromCart = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var cartId, cart, cartProduct_3, cartProducts, getProducts, productArray, i, products, amounts_1, summation, totals, error_4;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        cartId = req.params.cartId;
                        return [4 /*yield*/, models_1.default[this.model].findOne({
                                where: { cart_id: cartId }
                            })];
                    case 1:
                        cart = _a.sent();
                        if (!cart) {
                            res.status(404).json({
                                status: 404,
                                message: "no cart found with ID " + cartId
                            });
                        }
                        cartProduct_3 = [];
                        return [4 /*yield*/, models_1.default[this.model].findAll({
                                attributes: {
                                    exclude: [
                                        'createdAt',
                                        'updatedAt'
                                    ]
                                },
                                where: { cart_id: cartId }
                            })];
                    case 2:
                        cartProducts = _a.sent();
                        cartProducts.map(function (element) { return cartProduct_3.push(element.dataValues.product_id); });
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
                        for (i = 0; i < cartProduct_3.length; i += 1) {
                            productArray.push(getProducts(cartProduct_3[i]));
                        }
                        return [4 /*yield*/, Promise.all(productArray)];
                    case 3:
                        products = _a.sent();
                        amounts_1 = [];
                        products.map(function (element) {
                            var priceAmount = element.price;
                            var convertToNumber = parseFloat(priceAmount);
                            return amounts_1.push(convertToNumber);
                        });
                        summation = function (total, num) { return total + num; };
                        totals = amounts_1.reduce(summation);
                        res.status(201).json({
                            status: 201,
                            Amount: totals
                        });
                        return [3 /*break*/, 5];
                    case 4:
                        error_4 = _a.sent();
                        res.status(400).json({
                            status: 400,
                            error: error_4
                        });
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    return Cart;
}(CRUDOperations_1.default));
exports.default = Cart;
//# sourceMappingURL=cart.controller.js.map