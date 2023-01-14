const {
  createNewOrder,
  getAllOrdersMadeByUserId,
} = require("../services/order.service.js");
const { findUserByEmail } = require("../services/user.service");
const jsonwebtoken = require("jsonwebtoken");

const orderController = async (req, res) => {
  try {
    let body = req.body;
    // handle error case for empty items array
    if (body?.items.length == 0) {
      throw new Error();
    }
    let jwt = req.headers["authorization"];
    // res.status(202).json({ message: "done bro" });
    await createNewOrder(body, jwt);
    // await registerUser(body);
    // await assignRole(body.email, "User");
    res.status(201).send({
      message: "Order succesful!",
    });
  } catch (error) {
    res.status(400).json({
      message: "Malformed order request",
    });
  }
};

const ordersMadeByUserController = async (req, res) => {
  try {
    // get users email
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    let decoded = jsonwebtoken.decode(token);
    let userEmail = decoded.email;
    let foundUser = await findUserByEmail(userEmail);
    console.log(foundUser.dataValues.id);
    // findUserByEmail service
    // getOrdersMadeByUser
    const resp = await getAllOrdersMadeByUserId(foundUser.dataValues.id);
    resp.forEach((element) => {
      console.log(element.dataValues.order_no);
      console.log(element.dataValues.product_id);
      console.log(element.dataValues.product_price_at_time);
    });
  } catch (error) {}
};

module.exports = {
  orderController,
  ordersMadeByUserController,
};
