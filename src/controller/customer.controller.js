const e = require("express");
const user = require("../db/models/user");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.registration = async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword } = req;

  if (confirmPassword != password) {
    return res.status(403).json({
      success: false,
      message: "Password and Confirm Password doesn't match !!",
    });
  }
};
