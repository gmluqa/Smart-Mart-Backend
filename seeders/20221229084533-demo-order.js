'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Orders', [{
      id: 1,
      user_id: 2,
      product_id: 1,
      order_no: 1,
      product_price_at_time: "19.99eur",
      createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
      updatedAt: Sequelize.literal("CURRENT_TIMESTAMP")
    },
    {
      id: 2,
      user_id: 2,
      product_id: 1,
      order_no: 1,
      product_price_at_time: "19.99eur",
      createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
      updatedAt: Sequelize.literal("CURRENT_TIMESTAMP")
    },
    {
      id: 3,
      user_id: 2,
      product_id: 2,
      order_no: 1,
      product_price_at_time: "9.99eur",
      createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
      updatedAt: Sequelize.literal("CURRENT_TIMESTAMP")
    },
    {
      id: 4,
      user_id: 3,
      product_id: 4,
      order_no: 2,
      product_price_at_time: "7.99eur",
      createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
      updatedAt: Sequelize.literal("CURRENT_TIMESTAMP")
    },
    {
      id: 5,
      user_id: 5,
      product_id: 5,
      order_no: 3,
      product_price_at_time: "1.99eur",
      createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
      updatedAt: Sequelize.literal("CURRENT_TIMESTAMP")
    }], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Orders', null, {});
  }
};