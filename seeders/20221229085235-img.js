"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Imgs",
      [
        {
          id: 1,
          product_id: 1,
          img_path:
            "https://images.squarespace-cdn.com/content/v1/556ca79fe4b00d9b2abccd3b/1455036002197-H8ODMDQWGSTDRJN1GUTO/Zubits-Magnetic-Shoe-Closures-Never-Tie-Laces-Again-0-600x600.jpg",
          img_definer: "main",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 2,
          product_id: 2,
          img_path:
            "https://ae01.alicdn.com/kf/S2aca3a7ffa0b43459b3cb43784f78b13T/Orange-Pi-5-4GB-RK3588S-m-dulo-PCIE-externo-WiFi-BT-SSD-Gigabit-Ethernet-Ordenador-de.jpg_Q90.jpg",
          img_definer: "main",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 3,
          product_id: 3,
          img_path:
            "https://ae01.alicdn.com/kf/H3a35b4ac1aa84e208f7aca4f9819dcffj/ECOCO-dispensador-autom-tico-de-pasta-de-dientes-soporte-de-pared-accesorios-de-ba-o.jpg_Q90.jpg",
          img_definer: "main",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 4,
          product_id: 4,
          img_path: "/pathexample4",
          img_definer: "main",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 5,
          product_id: 5,
          img_path: "/pathexample5",
          img_definer: "main",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Imgs", null, {});
  },
};
