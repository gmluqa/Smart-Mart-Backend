const express = require("express");
const productRouter = express.Router();

const {
  getProductDetailController,
} = require("../controllers/product.controller.js");

productRouter.get("/id/:id", getProductDetailController);

module.exports = productRouter;
