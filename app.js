const express = require("express");
const app = express();
// const cors = require("cors");

// Middleware
// app.use(cors());
app.use(express.json());

// Middleware for Routes
const productRouter = require("./routers/product.router.js");
const userRouter = require("./routers/user.router.js");

// Routes
app.use("/product", productRouter);
app.use("/user", userRouter);

module.exports = app;
