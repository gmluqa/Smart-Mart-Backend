const { registerUser } = require("../services/user.service");

const registerController = (req, res) => {
  try {
    let body = req.body;
    registerUser(body);
    res.status(201).send({
      message: "You have registered succesfully!",
    });
  } catch (error) {
    res
      .status(400)
      .json({ message: "The input was invalid, please try again!" });
  }
};

module.exports = {
  registerController,
};
