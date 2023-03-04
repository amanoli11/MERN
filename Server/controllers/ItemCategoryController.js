const ItemCategoryService = require("../services/ItemCategoryService");

exports.getAllItemCategories = async (req, res) => {
  try {
    const items = await ItemCategoryService.getAllItemCategories();
    res.status(200);
    res.json({ data: items, message: "Item Categories fetched successfully" });
  } catch (error) {
    res.status(400).json(error);
  }
};
