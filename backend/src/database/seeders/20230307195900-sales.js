'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('sales',
    [
      {
        id: 1,
        user_id: 1,
        seller_id: 2,
        total_price: 42.20,
        delivery_address: "Rua dos Bobos",
        delivery_number: "102",
        status: "Pendente",
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('sales', null, {});
  }
};
