'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users',
    [{
      id: 1,
      username: 'Delivery App Admin',
      email: 'adm@deliveryapp.com',
      password: 'a4c86edecc5aee06eff8fdeda69e0d04', /* senha: md5('--adm2@21!!--') */
      role: 'administrator',
    },
    {
      id: 2,
      username: 'Vendedor 01',
      email: 'vendedor@deliveryapp.com',
      password: '3c28d2b0881bf46457a853e0b07531c6', /* senha: md5('fulana@123') */
      role: 'seller',
    },
    {
      id: 3,
      username: 'Cliente 01',
      email: 'cliente@email.com',
      password: '1c37466c159755ce1fa181bd247cb925', /* senha: md5('$#zebirita#$') */
      role: 'customer'
    }
    ], { timestamps: false });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
