const express = require("express");
const orderRouter = express.Router();

const { authenticateToken } = require("../middleware/auth.middleware");

const {
  orderController,
  ordersMadeByUserController,
} = require("../controllers/order.controller");

orderRouter.post("", authenticateToken, orderController);
orderRouter.get("", authenticateToken, ordersMadeByUserController);

module.exports = orderRouter;
