"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = __importDefault(require("./models"));
exports.DropSequelizeMeta = models_1.default.sequelize.query('DROP TABLE IF EXIST "SequelizeMeta"', { raw: true });
exports.DropSequelizeMeta
    .then(function () {
    process.exit(0);
})
    .catch(function () {
    process.exit(0);
});
//# sourceMappingURL=dropMeta.js.map