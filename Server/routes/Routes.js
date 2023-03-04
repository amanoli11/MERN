const express = require("express");
const ItemCategoryModel = require("../models/ItemCategoryModel");
const router = express.Router();
const {
  getAllItemCategories,
} = require("../controllers/ItemCategoryController");

router.route("/getItemCategory").get(getAllItemCategories);

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
