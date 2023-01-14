const models = require("../models/index");
const crypto = require("crypto");
const jsonwebtoken = require("jsonwebtoken");
const { findUserByEmail } = require("../services/user.service");

const createNewOrder = async (body, jwt) => {
  // find out what user it is, by decoding jwt
  jwt = jwt && jwt.split(" ")[1];
  jwt = jsonwebtoken.decode(jwt);

  // get user by email endpoint
  let foundUserId = await findUserByEmail(jwt.email);
  foundUserId = foundUserId.id;

  // generate a constant order ID
  const orderUuid = crypto.randomUUID();

  // for each item, create an order with it, if such an item doesn't exist (not found, skip it)
  body.items.forEach((element) => {
    console.log(element);
  });
  // in each iteration, get the price of it at the time
  // at the end of each iteration, save the order
  const newOrder = new models.Order({});
};

module.exports = {
  createNewOrder,
};
