const models = require("../models/index");
const crypto = require("crypto");
const jsonwebtoken = require("jsonwebtoken");
const { findUserByEmail } = require("../services/user.service");
const { getProductDetailByName } = require("../services/product.service.js");

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
  // in each iteration, get the price of it at the time
  // at the end of each iteration, save the order
  body.items.forEach(async (element) => {
    let productFoundByName = await getProductDetailByName(element);
    if (!productFoundByName?.[0]) {
      return;
    }
    let newOrder = new models.Order({
      user_id: foundUserId,
      product_id: productFoundByName?.[0]?._previousDataValues?.id,
      order_no: orderUuid,
      product_price_at_time:
        productFoundByName?.[0]?._previousDataValues?.product_price,
    });
    await newOrder.save();
  });
};

module.exports = {
  createNewOrder,
};
