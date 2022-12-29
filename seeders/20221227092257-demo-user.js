"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id: 1,
          email: "admin@smartmart.com",
          password: "password1234",
          address: "undisclosed",
          country: "Zambia",
          postcode: "0x12",
          city: "Ohio",
          phone: "+39 123 456 789",
          CreatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          UpdatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 2,
          email: "person1@smartmart.com",
          password: "password1234",
          address: "Arralabala",
          country: "Moldova",
          postcode: "0x13",
          city: "Zagreb",
          phone: "+30 113 456 789",
          CreatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          UpdatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 3,
          email: "person2@smartmart.com",
          password: "cant",
          address: "Perth",
          country: "Australia",
          postcode: "0x190",
          city: "Literally Perth Mate",
          phone: "+10 113 456 789",
          CreatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          UpdatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 4,
          email: "person3@smartmart.com",
          password: "cantx2",
          address: "Berlin",
          country: "Germany",
          postcode: "000x00",
          city: "Berlin echo",
          phone: "+90 113 456 789",
          CreatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          UpdatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 5,
          email: "person4@smartmart.com",
          password: "canihaz",
          address: "Jacobs town",
          country: "USA",
          postcode: "0x190",
          city: "Capital Wasteland",
          phone: "+1776 113 456 789",
          CreatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          UpdatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
