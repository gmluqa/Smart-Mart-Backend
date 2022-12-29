'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Tags', [{
      id: 1,
      product_id: 1,
      tag_name: "tag_name_example_1",
      createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
      updatedAt: Sequelize.literal("CURRENT_TIMESTAMP")
    },
    {
      id: 2,
      product_id: 1,
      tag_name: "tag_name_example_2_second_tag_for_same_product",
      createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
      updatedAt: Sequelize.literal("CURRENT_TIMESTAMP")
    },
    {
      id: 3,
      product_id: 3,
      tag_name: "tag_name_example_3",
      createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
      updatedAt: Sequelize.literal("CURRENT_TIMESTAMP")
    },
    {
      id: 4,
      product_id: 4,
      tag_name: "tag_name_example_4",
      createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
      updatedAt: Sequelize.literal("CURRENT_TIMESTAMP")
    },
    {
      id: 5,
      product_id: 5,
      tag_name: "tag_name_example_5",
      createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
      updatedAt: Sequelize.literal("CURRENT_TIMESTAMP")
    }], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tags', null, {});
  }
};