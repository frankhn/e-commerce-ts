"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var tax_controller_1 = __importDefault(require("./tax.controller"));
var tax = new tax_controller_1.default();
/** ******************************************* */
var tax_router = express_1.default.Router();
/** ******************************************* */
tax_router
    .route('/')
    .all()
    .get(tax.getMany);
tax_router
    .route('/:id(\\d+)')
    .all()
    .get(tax.readOne);
exports.default = tax_router;
//# sourceMappingURL=tax.routes.js.map