'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert('categorias', [
      {
        titulo: 'Node.js',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'Java',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'Python',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'C#',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete('categorias', null, {});
  }
};
