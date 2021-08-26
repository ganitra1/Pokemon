'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
    [
      {
        name: "Santa Clause",
        username: "fatman",
        password: "HoHoHo",
        id: 1
      },
      {
        name: "Easter Bunny",
        username: "hopman",
        password: `eggs`,
        id: 2
      },
      {
        name: "Tooth Fairy",
        username: "fairydust",
        password: "tooth",
        id: 3
      },
    ],
    {}
    );
  },
    

    

  down: async (queryInterface, Sequelize) => {
    
  },
};
