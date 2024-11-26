'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   return queryInterface.bulkInsert ( "Products",[
    {
    name: "MP5",
    price: 1250,
    CategoryId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    name: 'G36E',
    price: 3100, 
    CategoryId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'AEK-971',
    price: 3580,
    CategoryId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'M1014',
    price: 2395,
    CategoryId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  ])
},

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
