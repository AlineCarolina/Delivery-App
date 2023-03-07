'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('products',
    [{
      id: 1,
      name:'Italian-pizza',
      price: 42.20,
      url_image: 'http://localhost:8000/images/pizza-01.png',
    },
      {
        id: 2,
        name:'Tomato, ham, caper and mushroom pizza',
        price: 47.50,
        url_image: 'http://localhost:8000/images/pizza-02.png'
      },
      {
        id: 3,
        name:'Pizza with tomato, shrimp, arugula and olives',
        price: 42.49,
        url_image: 'http://localhost:8000/images/pizza-03.png'
      },
      {
        id: 4,
        name:'Mozzarella pizza, tomato bacon and loin',
        price: 47.50,
        url_image: 'http://localhost:8000/images/pizza-04.png'
      },
      {
        id: 5,
        name:'Vegetarian pizza',
        price: 42.19,
        url_image: 'http://localhost:8000/images/pizza-05.png'
      },
      {
        id: 6,
        name:'Cheese and pepperoni pizza',
        price: 44.49,
        url_image: 'http://localhost:8000/images/pizza-06.png'
      },
      {
        id: 7,
        name:'Neapolitan pizza',
        price: 44.99,
        url_image: 'http://localhost:8000/images/pizza-07.png'
      },
      {
        id: 8,
        name:'Tomato, chicken, ham and onion pizza',
        price: 42.79,
        url_image: 'http://localhost:8000/images/pizza-08.png'
      },
      {
        id: 9,
        name:'pizza with vegan cheese',
        price: 58.89,
        url_image: 'http://localhost:8000/images/pizza-09.png'
      },
      {
        id: 10,
        name: 'Sun dried tomatoes spicy pizza'
        ,price: 43.57,
        url_image: 'http://localhost:8000/images/pizza-10.png'
      },
      {
        id: 11,
        name: 'Pizza with sirloin, cottage cheese, cheese, olives and onions',
        price: 43.49,
        url_image: 'http://localhost:8000/images/pizza-11.png'
      },
      {
        id: 12,
        name: 'Tomatoes, ham and onions pizza',
        price: 43.49,
        url_image: 'http://localhost:8000/images/pizza-12.png'
      },
      {
        id: 13,
        name: 'Four cheese pizza with shrimp',
        price: 50.49,
        url_image: 'http://localhost:8000/images/pizza-13.png'
      }
    ], { timestamps: false });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null, {});
  }
};
