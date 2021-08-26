'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Teams",
      [
        {
          name: "Blizzards",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Earthquakes",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rookies",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },




  down: async (queryInterface, Sequelize) => {

  },
};
