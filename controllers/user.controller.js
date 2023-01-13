const {
  registerUser,
  assignRole,
  bcryptCompare,
  findUserByEmail,
  loggedInUsersRole,
} = require("../services/user.service");

const jsonwebtoken = require("jsonwebtoken");

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

const loginController = async (req, res) => {
  try {
    let email = req.body.email;
    const loggedInUser = await findUserByEmail(email);
    const loggedinUserWithRole = await loggedInUsersRole(loggedInUser.id);
    const isPasswordMatch = await bcryptCompare(
      req.body.password,
      loggedInUser.password
    );
    if (isPasswordMatch === false) {
      res.status(400).json({ message: "Incorrect email or password." });
    } else {
      const secret = process.env.JWT_TOKEN_SECRET;
      const token = jsonwebtoken.sign(
        {
          email: loggedInUser.email,
          exp: Date.now() + 100000000,
          userType: loggedinUserWithRole.role,
        },
        secret
      );
      res.status(200).json({ token: token });
    }
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Incorrect email or password." });
  }
};

module.exports = {
  registerController,
  loginController,
};
