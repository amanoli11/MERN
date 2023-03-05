const uomModel = require("../models/UomModel");

exports.getAllUom = async () => {
  return await uomModel.find().sort({ createdAt: -1 });
};

exports.createUOM = async (req) => {
  await uomModel.findOne({ name: req.body.name }).then((uom) => {
    if (uom) {
      throw new Error("UOM already exists");
    } else return new uomModel(req.body).save();
  });
};
