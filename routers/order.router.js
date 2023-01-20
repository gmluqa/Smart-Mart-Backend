const express = require("express");
const orderRouter = express.Router();

const { authenticateToken, isAdmin } = require("../middleware/auth.middleware");

const {
  orderController,
  ordersMadeByUserController,
  adminAllOrderController,
} = require("../controllers/order.controller");

orderRouter.post("", authenticateToken, orderController);
orderRouter.get("", authenticateToken, ordersMadeByUserController);
orderRouter.get("/all", authenticateToken, isAdmin, adminAllOrderController);

module.exports = orderRouter;
