const validator = require("../helper/validator");
const UomService = require("../services/UomService");

exports.getAllUom = async (req, res) => {
  try {
    const uom = await UomService.getAllUom();
    res.status(200);
    res.json({ data: uom, message: "UOM fetched successfully" });
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.createUOM = validator(async (req, res) => {
  await UomService.createUOM(req);
  res.status(200);
  res.json({ data: [], message: "UOM created successfully" });
  // try {
  //   await UomService.createUOM(req);
  //   res.status(200);
  //   res.json({ data: [], message: "UOM created successfully" });
  // } catch (err) {
  //   res.status(400).send({ message: err.message });
  // }
});
