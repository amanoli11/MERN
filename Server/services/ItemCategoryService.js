const ItemCategoryModel = require("../models/ItemCategoryModel");

exports.getAllItemCategories = async () => {
  return await ItemCategoryModel.find();
};
