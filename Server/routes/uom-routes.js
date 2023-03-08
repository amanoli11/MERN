const express = require("express");
const {
  getAllUom,
  createUOM,
  getPaginatedUom,
  getUomById,
} = require("../controllers/UomController");
const TryCatchHandler = require("../helper/tryCatchHandler");
const {
  uomValidation,
  uomValidationResult,
} = require("../validations/uom/uomValidation");
const router = express.Router();

router
  .route("/")
  .get(TryCatchHandler(getAllUom))
  .post(uomValidation, uomValidationResult, TryCatchHandler(createUOM));

router.route("/:id").get(TryCatchHandler(getUomById));

router.route("/paginated").get(TryCatchHandler(getPaginatedUom));

// router.route("/uom/:id").get(getUOMById).post(createUOM);

module.exports = router;
