const UomService = require("../services/UomService");

exports.getAllUom = async (req, res) => {
  const uom = await UomService.getAllUom();
  res.status(200);
  res.json({ data: uom, message: "UOM fetched successfully" });
};

exports.getUomById = async (req, res) => {
  console.log("getting");
  const uom = await UomService.getUomById();
  res.status(200);
  res.json({ data: uom, message: "UOM fetched successfully" });
};

exports.createUOM = async (req, res) => {
  await UomService.createUOM(req);
  res.status(200);
  res.json({ data: [], message: "UOM created successfully" });
};

exports.getPaginatedUom = async (req, res) => {
  const paginatedUom = await UomService.getPaginatedUom(req);
  res.status(200);
  res.json({ ...paginatedUom, message: "Uom list fetched successfully" });
};
