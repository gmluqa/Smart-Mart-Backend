require("dotenv").config();
const jsonwebtoken = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) {
    return res
      .status(401)
      .json({ message: "Not logged in correctly, please log in again." });
  }

  try {
    jsonwebtoken.verify(token, process.env.JWT_TOKEN_SECRET);
    if (token.exp < Date.now()) {
      return res
        .status(401)
        .json({ message: "Log in timed out, please log in again" });
    }
    next();
  } catch (error) {
    res.status(400).send({ message: "Invalid token!" });
  }
};

module.exports = {
  authenticateToken,
};
