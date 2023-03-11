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

exports.getUomById = async (id) => {
  return await uomModel.findById(id);
};

exports.getPaginatedUom = async (req) => {
  const currentPage = Number(req.query.page) || 1;
  const rowsPerPage = Number(req.query.limit) || 10;
  const startIndex = (currentPage - 1) * rowsPerPage;

  const data = await uomModel.find().limit(rowsPerPage).skip(startIndex);
  const totalRecords = await uomModel.countDocuments();

  const returnData = { data, totalRecords, currentPage, rowsPerPage };
  return returnData;
};
