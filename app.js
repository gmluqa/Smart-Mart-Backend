const express = require("express");
const app = express();
// const cors = require("cors");

// Middleware
// app.use(cors());
app.use(express.json());

// Middleware for Routes
const productRouter = require("./routers/product.router.js");

// Routes
app.use("/product", productRouter);

module.exports = app;
