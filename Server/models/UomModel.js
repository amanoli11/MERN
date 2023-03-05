const mongoose = require("mongoose");

const uomSchema = mongoose.Schema({
  name: { type: String, required: true },
  status: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
});

const uomModel = mongoose.model("uom", uomSchema);
module.exports = uomModel;
