const {
  createNewOrder,
  getAllOrdersMadeByUserId,
  getAllOrdersMadeInApp,
} = require("../services/order.service.js");
const { findUserByEmail } = require("../services/user.service");
const { getProductDetail } = require("../services/product.service");
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
    // findUserByEmail service
    // getOrdersMadeByUser
    let resp = await getAllOrdersMadeByUserId(foundUser.dataValues.id);
    resp.forEach(async (element, i) => {
      let productName = await getProductDetail(element.product_id);
      resp[i].dataValues["product_name"] = await productName.dataValues
        .product_name;
    });
    resp ? res.status(202).json(resp) : res.status(404).json;
  } catch (error) {
    res.status(404).json({ message: "Error with fetching orderss" });
  }
};

const adminAllOrderController = async (req, res) => {
  try {
    if (
      jsonwebtoken.decode(req.headers["authorization"].split(" ")[1])
        .userType == "Admin"
    ) {
      let resp = await getAllOrdersMadeInApp();
      resp ? res.status(202).json(resp) : res.status(404).json;
    } else if (
      jsonwebtoken.decode(req.headers["authorization"].split(" ")[1])
        .userType != "Admin"
    ) {
      throw new Error("Not admin");
    }
  } catch (error) {
    res.status(401).json({ message: "Not an admin" });
  }
};

module.exports = {
  orderController,
  ordersMadeByUserController,
  adminAllOrderController,
};
