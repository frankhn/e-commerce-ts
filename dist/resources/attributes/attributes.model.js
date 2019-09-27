"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributesInit = function (sequelize, Sequelize) {
    var attribute = {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        name: {
            type: Sequelize.STRING,
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
    return sequelize.define('attributes', attribute, {
        tableName: 'attributes'
    });
};
//# sourceMappingURL=attributes.model.js.map