const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is missing"],
    trim: true,
  },
  middleName: { type: String, required: false },
  lastName: { type: String, required: [true, "Last name is missing"] },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: [true, "User with this email already exists"],
  },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: [
      "Admin",
      "SalesPerson",
      "PurchasingManager",
      "SupplyChainManager",
      "WarehouseManager",
      "StoreManager",
      "SalesManager",
      "LogisticsManager",
      "CustomerServiceRepresentative",
      "Guest",
    ],
    default: "Guest",
    required: true,
  },
  createdAt: { type: Date, required: true, default: Date.now },
});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
