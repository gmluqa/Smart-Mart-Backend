const express = require("express");
const productRouter = express.Router();

const {
  getProductDetailController,
  getImageByIdAndDefiner,
  getProductDetailByNameController,
  searchProductDetailByNameController,
  createProductController,
} = require("../controllers/product.controller.js");

const {
  isAdmin,
  authenticateToken,
} = require("../middleware/auth.middleware.js");

// CREATE (only admin can create a new product)
productRouter.post(
  "/create-product",
  authenticateToken,
  isAdmin,
  createProductController
);

// READ (can be accessed by anyone, no auth needed)
productRouter.get("/id/:id", getProductDetailController);
productRouter.get("/id/:id/img/:imgDefiner", getImageByIdAndDefiner);
productRouter.get("/name/:name", getProductDetailByNameController);
productRouter.get("/search/:search", searchProductDetailByNameController);

// UPDATE (only admin can update a product)

// DELETE (only admin can delete a product)

module.exports = productRouter;
