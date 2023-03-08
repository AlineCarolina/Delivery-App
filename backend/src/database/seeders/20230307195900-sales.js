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
      },
      {
        id: 2,
        user_id: 2,
        seller_id: 3,
        total_price: 47.50,
        delivery_address: "Rua das Flores",
        delivery_number: "678",
        status: "Pendente",
      },
      {
        id: 3,
        user_id: 3,
        seller_id: 2,
        total_price: 82.40,
        delivery_address: "Rua dos Bobos",
        delivery_number: "114",
        status: "Em Trânsito",
      },
      {
        id: 4,
        user_id: 3,
        seller_id: 2,
        total_price: 44.49,
        delivery_address: "Rua Palmas",
        delivery_number: "780",
        status: "Preparando",
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('sales', null, {});
  }
};
