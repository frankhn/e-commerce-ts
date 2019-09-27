

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('orders', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    total_amount: {
      type: Sequelize.DECIMAL
    },
    created_on: {
      type: Sequelize.DATE,
      defaultValue: Date.now()
    },
    shipped_on: {
      type: Sequelize.DATE
    },
    status: {
      type: Sequelize.INTEGER,
    },
    comments: {
      type: Sequelize.STRING
    },
    customer_id: {
      type: Sequelize.INTEGER
    },
    auth_code: {
      type: Sequelize.STRING
    },
    reference: {
      type: Sequelize.STRING
    },
    shipping_id: {
      type: Sequelize.INTEGER,
      defaultValue: Date.now()
    },
    tax_id: {
      type: Sequelize.INTEGER
    },
    createdAt: {
      allowNull: true,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('NOW()')
    },
    updatedAt: {
      allowNull: true,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('NOW()')
    }
  }),
  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => Promise.all([queryInterface.dropTable('orders')])
};
