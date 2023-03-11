const { check, validationResult } = require("express-validator");

exports.userSignUpValidation = [
  check("firstName")
    .trim()
    .not()
    .isEmpty()
    .isString()
    .isLength({ min: 3, max: 100 })
    .withMessage("First name must be 3-100 characters"),
  check("lastName")
    .trim()
    .not()
    .isEmpty()
    .isString()
    .isLength({ min: 3, max: 100 })
    .withMessage("Last name must be 3-100 characters"),
  check("email")
    .trim()
    .not()
    .isEmpty()
    .isEmail()
    .isLength({ min: 3, max: 100 })
    .withMessage("Email is invalid"),
  check("password")
    .isStrongPassword()
    .withMessage(
      "Passwod needs to have 8 characters with min 1 lowercase 1 uppercase 1 symbol 1 number"
    ),
];

exports.userSignUpValidationResult = (req, res, next) => {
  const result = validationResult(req);
  if (result.isEmpty()) return next();
  const error = result.array({ onlyFirstError: true })[0];
  res.status(400).json({ message: error.msg });
};

exports.userLoginValidation = [
  check("email")
    .trim()
    .not()
    .isEmpty()
    .isEmail()
    .isLength({ min: 3, max: 100 })
    .withMessage("Email is invalid"),
  check("password").isString().withMessage("Password is required"),
];

exports.userLoginValidationResult = (req, res, next) => {
  const result = validationResult(req);
  if (result.isEmpty()) return next();
  const error = result.array({ onlyFirstError: true })[0];
  res.status(400).json({ message: error.msg });
};
