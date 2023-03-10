const models = require("../models/index");
const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword;
};

const registerUser = async (userCredentials) => {
  const newUser = new models.User({
    email: userCredentials.email,
    password: await hashPassword(userCredentials.password),
    address: userCredentials.address,
    country: userCredentials.country,
    postcode: userCredentials.postcode,
    city: userCredentials.city,
    phone: userCredentials.phone,
  });
  await newUser.save();
};

const assignRole = async (email, role) => {
  const userToBeAssigned = await findUserByEmail(email);
  const newUserRole = new models.Role({
    user_id: userToBeAssigned.id,
    role: role,
  });
  await newUserRole.save();
};

const findUserByEmail = async (email) => {
  const userFoundByEmail = await models.User.findOne({
    where: {
      email: email,
    },
  });
  return userFoundByEmail;
};

const bcryptCompare = async (password, hashedPassword) => {
  const passCompare = await bcrypt.compare(password, hashedPassword);
  return passCompare;
};

const loggedInUsersRole = async (userId) => {
  const userRole = await models.Role.findOne({
    attributes: ["role"],
    where: {
      user_id: userId,
    },
  });
  return userRole;
};

module.exports = {
  hashPassword,
  registerUser,
  assignRole,
  bcryptCompare,
  findUserByEmail,
  loggedInUsersRole,
};
