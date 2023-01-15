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
          img_path:
            "https://ae01.alicdn.com/kf/S702b4f18a20946dd9d38a1465e89e898u/Herramienta-de-filtrado-de-agua-potable-directa-de-emergencia-para-vida-salvaje-al-aire-libre-desinfecci.jpg_Q90.jpg",
          img_definer: "main",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 5,
          product_id: 5,
          img_path:
            "https://ae01.alicdn.com/kf/Hbd7356f3b3974554a587bd310c0865f74/Rodillo-r-pido-para-hacer-Sushi-molde-de-arroz-utensilios-de-cocina-para-carne-y-verduras.jpg_Q90.jpg",
          img_definer: "main",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 6,
          product_id: 6,
          img_path:
            "https://ae01.alicdn.com/kf/Hbd7356f3b3974554a587bd310c0865f74/Rodillo-r-pido-para-hacer-Sushi-molde-de-arroz-utensilios-de-cocina-para-carne-y-verduras.jpg_Q90.jpg",
          img_definer: "main",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 7,
          product_id: 7,
          img_path:
            "https://ae01.alicdn.com/kf/Hbd7356f3b3974554a587bd310c0865f74/Rodillo-r-pido-para-hacer-Sushi-molde-de-arroz-utensilios-de-cocina-para-carne-y-verduras.jpg_Q90.jpg",
          img_definer: "main",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 8,
          product_id: 8,
          img_path:
            "https://ae01.alicdn.com/kf/Hbd7356f3b3974554a587bd310c0865f74/Rodillo-r-pido-para-hacer-Sushi-molde-de-arroz-utensilios-de-cocina-para-carne-y-verduras.jpg_Q90.jpg",
          img_definer: "main",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 9,
          product_id: 9,
          img_path:
            "https://ae01.alicdn.com/kf/Hbd7356f3b3974554a587bd310c0865f74/Rodillo-r-pido-para-hacer-Sushi-molde-de-arroz-utensilios-de-cocina-para-carne-y-verduras.jpg_Q90.jpg",
          img_definer: "main",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 10,
          product_id: 10,
          img_path:
            "https://ae01.alicdn.com/kf/Hbd7356f3b3974554a587bd310c0865f74/Rodillo-r-pido-para-hacer-Sushi-molde-de-arroz-utensilios-de-cocina-para-carne-y-verduras.jpg_Q90.jpg",
          img_definer: "main",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 11,
          product_id: 11,
          img_path:
            "https://ae01.alicdn.com/kf/Hbd7356f3b3974554a587bd310c0865f74/Rodillo-r-pido-para-hacer-Sushi-molde-de-arroz-utensilios-de-cocina-para-carne-y-verduras.jpg_Q90.jpg",
          img_definer: "main",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 12,
          product_id: 12,
          img_path:
            "https://ae01.alicdn.com/kf/Hbd7356f3b3974554a587bd310c0865f74/Rodillo-r-pido-para-hacer-Sushi-molde-de-arroz-utensilios-de-cocina-para-carne-y-verduras.jpg_Q90.jpg",
          img_definer: "main",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 13,
          product_id: 13,
          img_path:
            "https://ae01.alicdn.com/kf/Hbd7356f3b3974554a587bd310c0865f74/Rodillo-r-pido-para-hacer-Sushi-molde-de-arroz-utensilios-de-cocina-para-carne-y-verduras.jpg_Q90.jpg",
          img_definer: "main",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 14,
          product_id: 14,
          img_path:
            "https://ae01.alicdn.com/kf/Hbd7356f3b3974554a587bd310c0865f74/Rodillo-r-pido-para-hacer-Sushi-molde-de-arroz-utensilios-de-cocina-para-carne-y-verduras.jpg_Q90.jpg",
          img_definer: "main",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 15,
          product_id: 15,
          img_path:
            "https://ae01.alicdn.com/kf/Hbd7356f3b3974554a587bd310c0865f74/Rodillo-r-pido-para-hacer-Sushi-molde-de-arroz-utensilios-de-cocina-para-carne-y-verduras.jpg_Q90.jpg",
          img_definer: "main",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 16,
          product_id: 16,
          img_path:
            "https://ae01.alicdn.com/kf/Hbd7356f3b3974554a587bd310c0865f74/Rodillo-r-pido-para-hacer-Sushi-molde-de-arroz-utensilios-de-cocina-para-carne-y-verduras.jpg_Q90.jpg",
          img_definer: "main",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 17,
          product_id: 17,
          img_path:
            "https://ae01.alicdn.com/kf/Hbd7356f3b3974554a587bd310c0865f74/Rodillo-r-pido-para-hacer-Sushi-molde-de-arroz-utensilios-de-cocina-para-carne-y-verduras.jpg_Q90.jpg",
          img_definer: "main",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 18,
          product_id: 18,
          img_path:
            "https://ae01.alicdn.com/kf/Hbd7356f3b3974554a587bd310c0865f74/Rodillo-r-pido-para-hacer-Sushi-molde-de-arroz-utensilios-de-cocina-para-carne-y-verduras.jpg_Q90.jpg",
          img_definer: "main",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 19,
          product_id: 19,
          img_path:
            "https://ae01.alicdn.com/kf/Hbd7356f3b3974554a587bd310c0865f74/Rodillo-r-pido-para-hacer-Sushi-molde-de-arroz-utensilios-de-cocina-para-carne-y-verduras.jpg_Q90.jpg",
          img_definer: "main",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 20,
          product_id: 20,
          img_path:
            "https://ae01.alicdn.com/kf/Hbd7356f3b3974554a587bd310c0865f74/Rodillo-r-pido-para-hacer-Sushi-molde-de-arroz-utensilios-de-cocina-para-carne-y-verduras.jpg_Q90.jpg",
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
