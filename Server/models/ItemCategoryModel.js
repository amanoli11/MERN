const mongoose = require("mongoose");

const ItemCategorySchema = mongoose.Schema({
  name: { type: String, required: true },
  status: { type: String, required: true },
});

const ItemCategoryModel = mongoose.model("ItemCategory", ItemCategorySchema);
module.exports = ItemCategoryModel;
