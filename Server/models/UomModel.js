const mongoose = require("mongoose");

const uomSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name of UOM"],
    unique: [true, "UOM with the same name already exists"],
  },
  status: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
});

const uomModel = mongoose.model("uom", uomSchema);
// uomModel.createIndexes('name')
module.exports = uomModel;
