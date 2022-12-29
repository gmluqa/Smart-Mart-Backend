"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          id: 1,
          product_name: "Zubits",
          product_alt_text: "Magnetic shoe laces",
          product_price: "4.99€",
          product_description:
            "Never tie or untie your shoe laces again! These magnetic shoelaces...",
          active: true,
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 2,
          product_name: "Orange Pi 5",
          product_alt_text: "Raspberry pi alternative",
          product_price: "4.99€",
          product_description: "description lorem...",
          active: true,
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 3,
          product_name: "Item 3",
          product_alt_text: "Item 3 alt_text",
          product_price: "7.99€",
          product_description: "description lorem ",
          active: true,
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 4,
          product_name: "Item 4",
          product_alt_text: "Item 4 alt_text",
          product_price: "2.99€",
          product_description: "description lorem ",
          active: true,
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 5,
          product_name: "Item 5",
          product_alt_text: "Item 5 alt_text",
          product_price: "12.99€",
          product_description: "description lorem ",
          active: true,
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
