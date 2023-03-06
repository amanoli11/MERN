const UomService = require("../services/UomService");

exports.getAllUom = async (req, res) => {
  const uom = await UomService.getAllUom();
  res.status(200);
  res.json({ data: uom, message: "UOM fetched successfully" });
};

exports.createUOM = async (req, res) => {
  await UomService.createUOM(req);
  res.status(200);
  res.json({ data: [], message: "UOM created successfully" });
};
