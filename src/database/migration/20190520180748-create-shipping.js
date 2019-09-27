

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('shippings', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    shipping_type: {
      type: Sequelize.STRING
    },
    shipping_cost: {
      type: Sequelize.DECIMAL
    },
    shipping_region_id: {
      type: Sequelize.INTEGER
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
  down: (queryInterface, Sequelize) => Promise.all([queryInterface.dropTable('shippings')])
};
