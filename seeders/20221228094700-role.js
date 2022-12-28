'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Roles', [{
      user_id: 1,
      role: "Admin",
      CreatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
      UpdatedAt: Sequelize.literal("CURRENT_TIMESTAMP")
    },
    {
      user_id: 2,
      role: "User",
      CreatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
      UpdatedAt: Sequelize.literal("CURRENT_TIMESTAMP")
    },
    {
      user_id: 3,
      role: "User",
      CreatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
      UpdatedAt: Sequelize.literal("CURRENT_TIMESTAMP")
    },
    {
      user_id: 4,
      role: "User",
      CreatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
      UpdatedAt: Sequelize.literal("CURRENT_TIMESTAMP")
    },
    {
      user_id: 5,
      role: "User",
      CreatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
      UpdatedAt: Sequelize.literal("CURRENT_TIMESTAMP")
    }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Roles', null, {});
  }
};
