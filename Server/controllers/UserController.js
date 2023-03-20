const UserService = require("../services/UserService.js");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET_KEY, { expiresIn: "3d" });
};

exports.login = async (req, res) => {
  const user = await UserService.login(req);
  const token = createToken(user._id);
  res.status(200);
  res.json({ token, message: `Welcome ${user.firstName}` });
};

exports.signup = async (req, res) => {
  const user = await UserService.signup(req);
  const { password, ...rest } = user;
  // creating token
  const token = createToken(user._id);
  res.status(200);
  res.json({
    data: { ...rest },
    token,
    message: "User signed up successfully",
  });
};

exports.getUserById = async (req, res) => {
  const user = await UserService.getUserById(req.params.id);
  res.status(200);
  res.json({ data: user, message: "User data fetched successfully" });
};
