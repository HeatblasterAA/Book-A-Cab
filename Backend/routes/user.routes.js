const express = require("express");

const router = express.Router();

//First we validate the data hence we use express validator
const { body } = require("express-validator");

const userController = require("../controllers/user.controller");

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name at least characters long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must atleast be 6 characters long"),
  ],

  //user Creation!
  userController.registerUser
);

module.exports = router;
