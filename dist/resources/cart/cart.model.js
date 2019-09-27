"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartInit = function (sequelize, Sequelize) {
    var cart = {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        cart_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true,
        },
        product_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        quantity: {
            type: Sequelize.INTEGER,
        },
        buy_now: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        },
        added_on: {
            type: Sequelize.DATE,
            defaultValue: Date.now()
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
    var Cart = sequelize.define('cart', cart, {
        tableName: 'shopping_carts'
    });
    return Cart;
};
//# sourceMappingURL=cart.model.js.map