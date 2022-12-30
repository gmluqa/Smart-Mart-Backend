const { registerUser, assignRole } = require("../services/user.service");

const registerController = async (req, res) => {
  try {
    let body = req.body;
    await registerUser(body);
    await assignRole(body.email, "User");
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
