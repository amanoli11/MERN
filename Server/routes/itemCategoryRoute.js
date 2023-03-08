const express = require("express");
const {
  getAllItemCategories,
  getItemCategoriesById,
  updateItemCategory,
  getPaginatedItemCategory,
} = require("../controllers/ItemCategoryController");
const TryCatchHandler = require("../helper/tryCatchHandler");
const ItemCategoryModel = require("../models/ItemCategoryModel");

const router = express.Router();

router.route("/paginated").get(TryCatchHandler(getPaginatedItemCategory));
router.get("/:id", getItemCategoriesById);
router.get("/", getAllItemCategories);
router.post("/", async (req, res) => {
  try {
    const newItem = await ItemCategoryModel(req.body);
    newItem.save();
    res.status(200);
    res.send("Item Category added");
  } catch (err) {
    res.status(400).json(err);
  }
});
router.post("/:id", updateItemCategory);

module.exports = router;
