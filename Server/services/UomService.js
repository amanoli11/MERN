const uomModel = require("../models/UomModel");

exports.getAllUom = async () => {
  return await uomModel.find().sort({ createdAt: -1 });
};

exports.createUOM = async (req) => {
  await uomModel.findOne({ name: req.body.name }).then((uomExists) => {
    if (uomExists) throw new Error("UOM already exists");
    return uomModel(req.body).save();
  });
};
