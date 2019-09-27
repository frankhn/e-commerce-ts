"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var attribute_values_controller_1 = __importDefault(require("./attribute_values.controller"));
var attribute_values_controller_2 = __importDefault(require("./attribute_values.controller"));
var attributes_router = express_1.default.Router();
// create car instance
var attribute = new attribute_values_controller_1.default();
var AttributesValues = new attribute_values_controller_2.default();
// get all attributes
attributes_router.get('/', attribute.getMany);
// get values of attribute from attribute
attributes_router.get('/values/:attributeID(\\d+)', AttributesValues.attributeValues);
// get one attribute by ID
attributes_router.get('/:id(\\d+)', attribute.readOne);
exports.default = attributes_router;
//# sourceMappingURL=attributes_values.routes.js.map