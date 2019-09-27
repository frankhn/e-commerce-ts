

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('categories', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    department_id: {
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.TEXT
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
  down: (queryInterface, Sequelize) => Promise.all([queryInterface.dropTable('categories')])
};
