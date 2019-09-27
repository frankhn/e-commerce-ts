"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewInit = function (sequelize, Sequelize) {
    var Review = {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        customer_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        product_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        review: {
            type: Sequelize.TEXT,
            allowNull: true
        },
        rating: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    };
    return sequelize.define('products', Review, {
        tableName: 'reviews'
    });
};
//# sourceMappingURL=review.model.js.map