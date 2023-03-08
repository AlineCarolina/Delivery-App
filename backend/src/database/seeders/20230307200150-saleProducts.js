'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('saleProducts',
    [
      {
        sale_id: 1,
        product_id: 1,
        quantity: 1
      },
      {
        sale_id: 1,
        product_id: 5,
        quantity: 1
      },
      {
        sale_id: 1,
        product_id: 2,
        quantity: 2
      },
      {
        sale_id: 4,
        product_id: 11,
        quantity: 1
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('saleProducts', null, {});
  }
};
