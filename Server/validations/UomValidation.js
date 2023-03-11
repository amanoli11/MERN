const { check, validationResult } = require("express-validator");
const { statusOption } = require("../enums/statusOption");

exports.uomValidation = [
  check("name")
    .trim()
    .not()
    .isEmpty()
    .isString()
    .isLength({ min: 2, max: 100 })
    .withMessage("UOM name must be within 3 to 100 characters"),
  check("status")
    .isString()
    .isIn(statusOption)
    .withMessage("Status option is invalid"),
];

exports.uomValidationResult = (req, res, next) => {
  const result = validationResult(req);
  if (result.isEmpty()) return next();
  const error = result.array({ onlyFirstError: true })[0];
  res.status(400).json({ message: error.msg });
};
