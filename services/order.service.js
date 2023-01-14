const models = require("../models/index");
const crypto = require("crypto");

const createNewOrder = async (body) => {
  // find out what user it is, by decoding jwt

  // generate a constant order ID
  const orderUuid = crypto.randomUUID;
  // for each item, create an order with it, if such an item doesn't exist (not found, skip it)
  // in each iteration, get the price of it at the time
  // at the end of each iteration, save the order
  const newOrder = new models.Order({});
};

module.exports = {
  createNewOrder,
};
