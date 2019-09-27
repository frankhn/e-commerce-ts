"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxInit = function (sequelize, Sequelize) {
    var tax = {
        id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER
        },
        tax_type: {
            type: Sequelize.STRING,
            allowNull: false
        },
        tax_percentage: {
            type: Sequelize.REAL,
        }
    };
    var Tax = sequelize.define('taxes', tax, {
        tableName: 'taxes'
    });
    return Tax;
};
//# sourceMappingURL=tax.model.js.map