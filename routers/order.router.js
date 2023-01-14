const express = require("express");
const orderRouter = express.Router();

const { authenticateToken } = require("../middleware/auth.middleware");

const { orderController } = require("../controllers/order.controller");

orderRouter.post("/order", authenticateToken, orderController);

module.exports = orderRouter;
