const express = require("express");
const {
  getAllItemCategories,
  getItemCategoriesById,
  updateItemCategory,
  getPaginatedItemCategory,
} = require("../controllers/ItemCategoryController");
const { ROLE } = require("../enums/userRoles.js");
const TryCatchHandler = require("../helper/tryCatchHandler");
const { Permission } = require("../middleware/permission");
const ItemCategoryModel = require("../models/ItemCategoryModel");

const router = express.Router();

router
  .route("/paginated")
  .get(
    Permission([ROLE.SalesPerson, ROLE.SalesManager, ROLE.StoreManager]),
    TryCatchHandler(getPaginatedItemCategory)
  );
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
