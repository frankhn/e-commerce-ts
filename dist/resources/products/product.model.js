"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductInit = function (sequelize, Sequelize) {
    var Product = {
        id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4
        },
        name: {
            type: Sequelize.TEXT,
            allowNull: false,
            unique: true
        },
        description: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        price: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false
        },
        discounted_price: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false,
            defaultValue: 0.00
        },
        image: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        image_2: {
            type: Sequelize.TEXT,
            allowNull: true
        },
        thumbnail: {
            type: Sequelize.TEXT,
            allowNull: true
        },
        display: {
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue: 0
        },
    };
    return sequelize.define('products', Product, {
        tableName: 'products'
    });
};
//# sourceMappingURL=product.model.js.map