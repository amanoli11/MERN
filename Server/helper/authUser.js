const jwt = require("jsonwebtoken");
const userModel = require("../models/UserModel");

exports.AuthUser = async (token, res) => {
  if (!token) return res.status(400), res.send("Token required");
  const userId = jwt.verify(JSON.parse(token), process.env.SECRET_KEY)._id;
  return await userModel.findById(userId).select("role");
};
