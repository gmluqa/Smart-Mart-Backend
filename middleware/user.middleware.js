const models = require("../models/index");

const checkIfEmailValidAndUnique = async (req, res, next) => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (req.body.email.match(emailRegex)) {
    const findUserWithEmail = await models.User.findOne({
      where: {
        email: req.body.email,
      },
    });
    findUserWithEmail
      ? res.status(400).send({ message: "Email is already in use." })
      : next();
  } else {
    res.status(400).json({ message: "Invalid Email formatting" });
  }
};

const checkIfPasswordValid = async (req, res, next) => {
  const passwordRegex = /^.{8,}$/;

  if (req.body.password.match(passwordRegex)) {
    next();
  } else {
    res.status(400).json({ message: "Password must have at least 8 letters" });
  }
};

module.exports = {
  checkIfEmailValidAndUnique,
  checkIfPasswordValid,
};
