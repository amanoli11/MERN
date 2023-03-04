const ItemCategoryModel = require("../models/ItemCategoryModel");

exports.getAllItemCategories = async () => {
  return await ItemCategoryModel.find();
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
