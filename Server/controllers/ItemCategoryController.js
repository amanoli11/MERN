const ItemCategoryService = require("../services/ItemCategoryService");

exports.getPaginatedItemCategory = async (req, res) => {
  const paginatedItemCategory =
    await ItemCategoryService.getPaginatedItemCategory(req);
  res.status(200);
  res.json({
    ...paginatedItemCategory,
    message: "Item category fetched successfully",
  });
};

exports.getAllItemCategories = async (req, res) => {
  try {
    const items = await ItemCategoryService.getAllItemCategories();
    res.status(200);
    res.json({ data: items, message: "Item categories fetched successfully" });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getItemCategoriesById = async (req, res) => {
  try {
    const item = await ItemCategoryService.getItemCategoriesById(req.params.id);
    res.status(200);
    res.json({ data: item, message: "Item category fetched successfully" });
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.updateItemCategory = async (req, res) => {
  try {
    await ItemCategoryService.updateItemCategory(req);
    res.status(200);
    res.json({ data: null, message: "Item category updated successfully" });
  } catch (err) {
    res.status(400).json(err);
  }
};
