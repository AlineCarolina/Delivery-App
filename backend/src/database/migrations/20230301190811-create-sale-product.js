'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('saleProducts', {
      sale_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        field: 'sale_id',
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: {
          model: 'sales',
          key: 'id'
        }
      },
      product_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        field: 'product_id',
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: {
          model: 'products',
          key: 'id'
        }
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('saleProducts');
  }
};
