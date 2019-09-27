

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('products', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.TEXT,
      unique: true
    },
    description: {
      type: Sequelize.TEXT
    },
    price: {
      type: Sequelize.DECIMAL
    },
    discounted_price: {
      type: Sequelize.DECIMAL
    },
    image: {
      type: Sequelize.TEXT
    },
    image_2: {
      type: Sequelize.TEXT
    },
    thumbnail: {
      type: Sequelize.TEXT
    },
    display: {
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
  down: (queryInterface, Sequelize) => Promise.all([queryInterface.dropTable('products')])
};
