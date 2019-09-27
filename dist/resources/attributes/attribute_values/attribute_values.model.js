"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attributes_valuesInit = function (sequelize, Sequelize) {
    var attribute_values = {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        attribute_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        value: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
        }
    };
    return sequelize.define('attributes_values', attribute_values, {
        tableName: 'attribute_values'
    });
};
//# sourceMappingURL=attribute_values.model.js.map