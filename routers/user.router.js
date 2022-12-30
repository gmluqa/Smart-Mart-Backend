const express = require("express");
const userRouter = express.Router();

const { registerController } = require("../controllers/user.controller.js");

const { checkIfEmailValidAndUnique } = require("../middleware/user.middleware");

userRouter.post("/register", checkIfEmailValidAndUnique, registerController);

module.exports = userRouter;
