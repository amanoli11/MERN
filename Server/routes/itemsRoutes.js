const express = require("express");
const ItemCategoryModel = require("../models/ItemCategoryModel");
const ItemModel = require("../models/itemModels");
const router = express.Router();

router.get("/getItemCategory", async (req, res) => {
  try {
    const items = await ItemCategoryModel.find();
    res.send(items);
  } catch (error) {
    res.status(400).json(error);
  }
});

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
