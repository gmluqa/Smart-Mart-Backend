const {} = require("../services/order.service");

//   const jsonwebtoken = require("jsonwebtoken");

const orderController = () => {
  try {
    let body = req.body;
    // await registerUser(body);
    // await assignRole(body.email, "User");
    // res.status(201).send({
    //   message: "You have registered succesfully!",
    // });
  } catch (error) {
    res.status(400).json({
      message: "Malformed order request, please try logging in again!",
    });
  }
};

module.exports = {
  orderController,
};
