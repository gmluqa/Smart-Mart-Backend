const { createNewOrder } = require("../services/order.service.js");

//   const jsonwebtoken = require("jsonwebtoken");

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
    // res.status(201).send({
    //   message: "You have registered succesfully!",
    // });
  } catch (error) {
    res.status(400).json({
      message: "Malformed order request",
    });
  }
};

module.exports = {
  orderController,
};
