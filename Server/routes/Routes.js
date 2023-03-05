const express = require("express");
const ItemCategoryModel = require("../models/ItemCategoryModel");
const router = express.Router();
const {
  getAllItemCategories,
  getItemCategoriesById,
  updateItemCategory,
} = require("../controllers/ItemCategoryController");

const { createUOM, getAllUom } = require("../controllers/UomController");

// UOM
router.route("/uom").get(getAllUom).post(createUOM);
// router.route('/uom/:id').get(getUOMById).post(createUOM)

// Item Category
router.route("/getItemCategory").get(getAllItemCategories);
router.route("/updateItemCategory/:id").post(updateItemCategory); // use patch for update
router.route("/getItemCategory/:id").get(getItemCategoriesById);
router.post("/createItemCategory", async (req, res) => {
  try {
    const newItem = new ItemCategoryModel(req.body);
    await newItem.save();
    res.status(200);
    res.send("Item Category added");
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
