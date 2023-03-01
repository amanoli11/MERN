const express = require("express");
const ItemModel = require("../models/itemModels");
const router = express.Router();

router.get("/getAllItems", async (req, res) => {
  try {
    const items = await ItemModel.find();
    res.send(items);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
