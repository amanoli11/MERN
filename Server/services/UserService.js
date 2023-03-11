const { genSalt, hash, compare } = require("bcrypt");
const userModel = require("../models/UserModel");

exports.login = async (req) => {
  const user = await userModel.findOne({
    email: req.body.email,
  });
  if (!user) throw Error("Cannot find the user");
  const matchPassword = compare(req.body.password, user.password);
  if (!matchPassword) throw Error("Incorrect password");
  return {
    _id: user._id,
    firstName: user.firstName,
    middleName: user.middleName,
    lastName: user.lastName,
  };
};

exports.signup = async (req) => {
  const emailExists = await userModel.findOne({ email: req.body.email });
  if (emailExists) throw Error("Email already in use");
  const salt = await genSalt(10);
  const hashPassword = await hash(req.body.password, salt);

  return await userModel.create({
    ...req.body,
    password: hashPassword,
  });
};
