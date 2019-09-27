
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('customers', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    email: {
      type: Sequelize.STRING(100),
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    credit_card: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    address_1: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    address_2: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    city: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    region: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    postal_code: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    country: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    shipping_region_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    day_phone: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    eve_phone: {
      type: Sequelize.STRING(100),
      allowNull: true
    },
    mob_phone: {
      type: Sequelize.STRING(100),
      allowNull: true
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
  down: (queryInterface, Sequelize) => Promise.all([queryInterface.dropTable('customers')])
};
