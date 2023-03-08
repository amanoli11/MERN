const ItemCategoryModel = require("../models/ItemCategoryModel");

exports.getPaginatedItemCategory = async (req) => {
  const currentPage = Number(req.query.page) || 1;
  const rowsPerPage = Number(req.query.limit) || 10;

  const startIndex = (currentPage - 1) * rowsPerPage;

  const data = await ItemCategoryModel.find()
    .limit(rowsPerPage)
    .skip(startIndex);
  const totalRecords = await ItemCategoryModel.countDocuments();

  const returnData = { data, totalRecords, currentPage, rowsPerPage };
  return returnData;
};

exports.getAllItemCategories = async () => {
  return await ItemCategoryModel.find().sort({ createdAt: -1 });
};

exports.getItemCategoriesById = async (id) => {
  return await ItemCategoryModel.findById(id);
};

exports.updateItemCategory = async (value) => {
  return await ItemCategoryModel.findOneAndUpdate(
    { _id: value.params.id },
    { ...value.body }
  );
};
