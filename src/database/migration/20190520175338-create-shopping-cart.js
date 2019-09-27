

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('shopping_carts', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    item_id: {
      type: Sequelize.INTEGER
    },
    cart_id: {
      type: Sequelize.INTEGER
    },
    product_id: {
      type: Sequelize.INTEGER
    },
    attributes: {
      type: Sequelize.STRING
    },
    quantity: {
      type: Sequelize.INTEGER
    },
    buy_now: {
      type: Sequelize.BOOLEAN
    },
    added_on: {
      type: Sequelize.DATE
    },
    createdAt: {
      allowNull: true,
      type: Sequelize.DATE,
      defaultValues: Sequelize.literal('NOW()')
    },
    updatedAt: {
      allowNull: true,
      type: Sequelize.DATE,
      defaultValues: Sequelize.literal('NOW()')
    }
  }),
  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => Promise.all([queryInterface.dropTable('shopping_carts')])
};
