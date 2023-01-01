const express = require("express");
const productRouter = express.Router();

const {
  getProductDetailController,
  getImageByIdAndDefiner,
} = require("../controllers/product.controller.js");

productRouter.get("/id/:id", getProductDetailController);
productRouter.get("/id/:id/img/:imgDefiner", getImageByIdAndDefiner);

module.exports = productRouter;
