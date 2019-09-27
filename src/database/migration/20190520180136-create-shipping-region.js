

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('shipping_regions', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    shipping_region_id: {
      type: Sequelize.INTEGER,
      unique: true,
      allowNull: false
    },
    shipping_region: {
      type: Sequelize.STRING
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
  down: (queryInterface, Sequelize) => Promise.all([queryInterface.dropTable('shipping_regions')])
};
