const ItemCategoryModel = require("../models/ItemCategoryModel");

exports.getAllItemCategories = async () => {
  return await ItemCategoryModel.find();
};

exports.getItemCategoriesById = async (id) => {
  return await ItemCategoryModel.findById(id);
};
