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
            "https://ae01.alicdn.com/kf/Ha33cd7d17041468b8c53ea7b0126d616w/QOOVI-Soporte-de-Cables-USB-Organizador-de-Cables-Flexible-Bobinador-de-Cables-Clips-de-Silicona-para.jpg_Q90.jpg",
          img_definer: "main",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 7,
          product_id: 7,
          img_path:
            "https://ae01.alicdn.com/kf/S9a10d19d2b5f4dda9164e1e77198ea63w/Organizador-de-Cables-autoadhesivo-abrazadera-de-amarre-de-cables-soporte-de-Clips-gesti-n-de-abrazadera.jpg_Q90.jpg",
          img_definer: "main",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 8,
          product_id: 8,
          img_path:
            "https://ae01.alicdn.com/kf/Hc1e6124884424ca0b45d4fe395537ecca/L-teanina-200-mg-60-c-psulas-Env-o-Gratis.jpg_Q90.jpg",
          img_definer: "main",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 9,
          product_id: 9,
          img_path:
            "https://ae01.alicdn.com/kf/Sab84bcd8743b462197856c67afbdb06fJ/AVATTO-enchufe-WiFi-con-Monitor-de-potencia-enchufe-est-ndar-europeo-de-16A-protecci-n-contra.jpg_Q90.jpg",
          img_definer: "main",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 10,
          product_id: 10,
          img_path:
            "https://ae01.alicdn.com/kf/S05d45060d5214fd184544fd75205dd41D/Creatina-Creatine-Monohydrate-200-Mesh-300-Gr-neutro-sin-sabor-para-ganar-m-sculo-aumenta-la.jpg_Q90.jpg",
          img_definer: "main",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 11,
          product_id: 11,
          img_path:
            "https://ae01.alicdn.com/kf/Sc8f934ae5e6c45ca9271786b0e75b61fq/HFU-Max-c-psulas-potentes-de-Panax-Ginseng-extracto-de-plantas-antifatiga-suplemento-de-energ-a.jpg_Q90.jpg",
          img_definer: "main",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 12,
          product_id: 12,
          img_path:
            "https://ae01.alicdn.com/kf/S40050807bec043aa95098eee1427f3abl/Soporte-extra-ble-para-cepillo-de-dientes-organizador-de-viaje-transparente-para-afeitadora-de-inodoro-estante.jpg_Q90.jpg",
          img_definer: "main",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 13,
          product_id: 13,
          img_path:
            "https://ae01.alicdn.com/kf/S1d0e9d759a81461ead43f942b0e6b2a6c/Limpiador-de-polvo-para-el-hogar-zapatillas-de-pastoreo-limpieza-de-suelo-de-ba-o-mopa.jpg_Q90.jpg",
          img_definer: "main",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 14,
          product_id: 14,
          img_path:
            "https://ae01.alicdn.com/kf/H281a4d71502743c883f87f6f11135059r/Guantes-de-goma-de-silicona-para-limpieza-de-lavavajillas-guante-de-esponja-para-el-hogar-Herramientas.jpg_Q90.jpg",
          img_definer: "main",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 15,
          product_id: 15,
          img_path:
            "https://ae01.alicdn.com/kf/H29429e4f6ef8404191bccf724e4c4b35m/Bombilla-inteligente-E14-con-WiFi-l-mpara-LED-RGB-regulable-de-6W-cambia-de-Color-Control.jpg_Q90.jpg",
          img_definer: "main",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 16,
          product_id: 16,
          img_path:
            "https://ae01.alicdn.com/kf/S02bc150afc5d46cea65fc2deb1ffe166T/CORUI-Interruptor-t-ctil-inteligente-para-el-hogar-dispositivo-con-WiFi-est-ndar-europeo-90-250V.jpg_Q90.jpg",
          img_definer: "main",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 17,
          product_id: 17,
          img_path:
            "https://ae01.alicdn.com/kf/Ue64df708006a45cf98b7d8d7eb4a3e86x/SANON-Guaran-120-comprimidos-de-600-mg-Excitante-del-sistema-nervioso-central-Aporta-un-extra-de.jpg_Q90.jpg",
          img_definer: "main",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 18,
          product_id: 18,
          img_path:
            "https://ae01.alicdn.com/kf/Sb5263246078544eaa872a570985791215/Termostato-inteligente-con-Wifi-controlador-de-temperatura-de-calefacci-n-de-suelo-el-ctrico-calefacci-n.jpg_Q90.jpg",
          img_definer: "main",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 19,
          product_id: 19,
          img_path:
            "https://ae01.alicdn.com/kf/Sb6ef1dd9aad44bed941084bcf7cf6cfcY/Estaci-n-de-energ-a-port-til-para-exteriores-generador-Solar-externo-de-700-V-bater.jpg_Q90.jpg",
          img_definer: "main",
          createdAt: Sequelize.literal("CURRENT_TIMESTAMP"),
          updatedAt: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          id: 20,
          product_id: 20,
          img_path:
            "https://ae01.alicdn.com/kf/S828b571eb29541d8ac49de8db2ac8e46d/Robot-de-barrido-inteligente-con-Control-por-aplicaci-n-aspiradora-inal-mbrica-de-barrido-limpieza-en.jpg_Q90.jpg",
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
