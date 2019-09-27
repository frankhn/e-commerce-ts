"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCategoryInit = function (sequelize, Sequelize) {
    var ProductCategory = {
        id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4
        },
        product_id: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        category_id: {
            type: Sequelize.TEXT,
            allowNull: false
        }
    };
    return sequelize.define('product_categories', ProductCategory, {
        tableName: 'product_categories'
    });
};
//# sourceMappingURL=product_category.model.js.map