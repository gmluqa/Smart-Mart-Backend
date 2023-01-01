const express = require("express");
const userRouter = express.Router();

const {
  registerController,
  loginController,
} = require("../controllers/user.controller.js");

const {
  checkIfEmailValidAndUnique,
  checkIfPasswordValid,
} = require("../middleware/user.middleware");

userRouter.post(
  "/register",
  checkIfEmailValidAndUnique,
  checkIfPasswordValid,
  registerController
);

userRouter.post("/login", loginController);

module.exports = userRouter;
