const mongoose = require("mongoose");

const ItemCategorySchema = mongoose.Schema({
  name: { type: String, required: true },
  status: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
});

const ItemCategoryModel = mongoose.model("ItemCategory", ItemCategorySchema);
module.exports = ItemCategoryModel;
