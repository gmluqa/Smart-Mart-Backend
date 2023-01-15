const express = require("express");
const productRouter = express.Router();

const {
  getProductDetailController,
  getImageByIdAndDefiner,
  getProductDetailByNameController,
  searchProductDetailByNameController,
} = require("../controllers/product.controller.js");

productRouter.get("/id/:id", getProductDetailController);
productRouter.get("/id/:id/img/:imgDefiner", getImageByIdAndDefiner);
productRouter.get("/name/:name", getProductDetailByNameController);
productRouter.get("/search/:search", searchProductDetailByNameController);

module.exports = productRouter;
