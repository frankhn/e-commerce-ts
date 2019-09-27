"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryInit = function (sequelize, Sequelize) {
    var Category = {
        id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        description: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        department_id: {
            type: Sequelize.INTEGER
        }
    };
    return sequelize.define('products', Category, {
        tableName: 'categories'
    });
};
//# sourceMappingURL=category.model.js.map