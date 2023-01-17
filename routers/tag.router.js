const express = require("express");
const tagRouter = express.Router();

const {
  getProductsByTagController,
} = require("../controllers/tag.controller.js");

tagRouter.get("/:name", getProductsByTagController);

module.exports = tagRouter;
