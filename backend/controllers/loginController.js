const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = require("../models/user");
const dotenv = require("dotenv");

// get config vars
dotenv.config();
const secretToken = process.env.TOKEN_SECRET;

const login = async (req, res) =>{
  const { email, password } = req.body;
  const user = await User.findOne({
    email,
  });

  if (!user) {
    throw Error("User not found");
  }
  if (bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign({ user }, secretToken, {
      expiresIn: "60s",
    });

    res.json({
      user,
      token,
      message: " User Logged  in successfully",
    });
  } else {
    res.status(401).json({
      message: "Unauthenticated",
    });
  }
}

module.exports = { login };
