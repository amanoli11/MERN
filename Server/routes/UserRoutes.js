const express = require("express");
const router = express.Router();
const TryCatchHandler = require("../helper/tryCatchHandler");
const UserController = require("../controllers/UserController");
const {
  userSignUpValidation,
  userSignUpValidationResult,
  userLoginValidation,
  userLoginValidationResult,
} = require("../validations/UserValidation");

// login
router
  .route("/login")
  .post(
    userLoginValidation,
    userLoginValidationResult,
    TryCatchHandler(UserController.login)
  );

// signup
router
  .route("/signup")
  .post(
    userSignUpValidation,
    userSignUpValidationResult,
    TryCatchHandler(UserController.signup)
  );

module.exports = router;
