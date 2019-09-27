"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var category_controller_1 = __importDefault(require("./category.controller"));
var category_router = express_1.default.Router();
// create car instance
var category = new category_controller_1.default();
// get all categories
category_router.get('/', category.getMany);
// get one category by ID
category_router.get('/:id(\\d+)', category.readOne);
// get category of a product
category_router.get('/inProduct/:productID(\\d+)', category.productCategories);
// get categories of a department
category_router.get('/inDepartment/:departmentID(\\d+)', category.categoriesInADepartment);
exports.default = category_router;
//# sourceMappingURL=category.routes.js.map